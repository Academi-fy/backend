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

// TODO send blackboard.targets (being also clubs, classes, courses, subjects, grades)
@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  constructor(private blackboardService: BlackboardService) {
    super();
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<EventResponse> {
    const createdBlackboard = await this.blackboardService.createBlackboard(
      body.value,
    );

    createdBlackboard.school.members.forEach((member) => {
      this.clients.get(member.id)?.emit('BLACKBOARD_CREATE', createdBlackboard);
    });

    return this.respond('BLACKBOARD_CREATE', createdBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<EventResponse> {
    const updatedBlackboard = await this.blackboardService.editBlackboard(
      body.modifyId,
      body.value,
    );

    updatedBlackboard.school.members.forEach((member) => {
      this.clients.get(member.id)?.emit('BLACKBOARD_UPDATE', updatedBlackboard);
    });

    return this.respond('BLACKBOARD_UPDATE', updatedBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<never>,
  ): Promise<EventResponse> {
    const deletedBlackboard = await this.blackboardService.deleteBlackboard(
      body.modifyId,
    );

    deletedBlackboard.school.members.forEach((member) => {
      this.clients.get(member.id)?.emit('BLACKBOARD_DELETE', deletedBlackboard);
    });

    return this.respond('BLACKBOARD_DELETE', body);
  }
}
