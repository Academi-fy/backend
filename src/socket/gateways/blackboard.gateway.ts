import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '../../constants';

import {
  BlackboardService,
  CreateBlackboardDto,
  EditBlackboardDto,
} from '../../rest/blackboard';
import { Blackboard, User } from '../../@generated-types';
import { EventResponse, GatewayMessage } from '../entities/gateway';
import { Gateway } from '../entities';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  constructor(private blackboardService: BlackboardService) {
    super();
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<EventResponse<Blackboard>> {
    const createdBlackboard = await this.blackboardService.createBlackboard(
      body.value,
    );

    createdBlackboard.school.members.forEach((member: User) => {
      this.clients
        .get(member.id)
        ?.emit('RECEIVED_BLACKBOARD_CREATE', createdBlackboard);
    });

    return this.respond('EXECUTED_BLACKBOARD_CREATE', createdBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<EventResponse<Blackboard>> {
    const updatedBlackboard = await this.blackboardService.editBlackboard(
      body.modifyId,
      body.value,
    );

    updatedBlackboard.school.members.forEach((member: User) => {
      this.clients
        .get(member.id)
        ?.emit('RECEIVED_BLACKBOARD_UPDATE', updatedBlackboard);
    });

    return this.respond('EXECUTED_BLACKBOARD_UPDATE', updatedBlackboard);
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<never>,
  ): Promise<EventResponse<Blackboard>> {
    const deletedBlackboard = await this.blackboardService.deleteBlackboard(
      body.modifyId,
    );

    deletedBlackboard.school.members.forEach((member: User) => {
      this.clients
        .get(member.id)
        ?.emit('RECEIVED_BLACKBOARD_DELETE', deletedBlackboard);
    });

    return this.respond('EXECUTED_BLACKBOARD_DELETE', deletedBlackboard);
  }
}
