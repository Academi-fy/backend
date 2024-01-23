import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '../../../constants';

import { EventResponse, Gateway } from '../gateway';
import {
  BlackboardService,
  CreateBlackboardDto,
  EditBlackboardDto,
} from '../../../rest/blackboard';
import { GatewayMessage } from '../GatewayMessage';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {

  constructor(private blackboardService: BlackboardService) {
    super();
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<EventResponse> {
    const createdBlackboard =
      await this.blackboardService.createBlackboard(body.value);

    

    return this.respond('BLACKBOARD_CREATE', createdBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<EventResponse> {
    return this.respond('BLACKBOARD_UPDATE', body);
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<string>,
  ): Promise<EventResponse> {
    return this.respond('BLACKBOARD_DELETE', body);
  }
}
