import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '../../../constants';

import { EventResponse, Gateway } from '../gateway';
import {
  CreateBlackboardDto,
  EditBlackboardDto,
} from '../../../rest/blackboard';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  @WebSocketServer()
  server: any;

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: CreateBlackboardDto,
  ): Promise<EventResponse> {
    return this.respond('BLACKBOARD_CREATE', body);
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: EditBlackboardDto,
  ): Promise<EventResponse> {
    return this.respond('BLACKBOARD_UPDATE', body);
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: { id: string },
  ): Promise<EventResponse> {
    return this.respond('BLACKBOARD_DELETE', body);
  }
}
