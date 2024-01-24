import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
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

  private async handleBlackboardMutation(
    body: GatewayMessage<CreateBlackboardDto | EditBlackboardDto>,
    mutationType: string,
    mutationFunction: (body: any) => Promise<any>,
  ): Promise<EventResponse> {
    const mutatedBlackboard = await mutationFunction(body);

    mutatedBlackboard.school.members.forEach((member) => {
      this.clients.get(member.id)?.emit(mutationType, mutatedBlackboard);
    });

    return this.respond(mutationType, mutatedBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<EventResponse> {
    return this.handleBlackboardMutation(body, 'BLACKBOARD_CREATE', (body) =>
      this.blackboardService.createBlackboard(body.value),
    );
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<EventResponse> {
    return this.handleBlackboardMutation(body, 'BLACKBOARD_UPDATE', (body) =>
      this.blackboardService.editBlackboard(body.modifyId, body.value),
    );
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<never>,
  ): Promise<EventResponse> {
    return this.handleBlackboardMutation(body, 'BLACKBOARD_DELETE', (body) =>
      this.blackboardService.deleteBlackboard(body.modifyId),
    );
  }
}
