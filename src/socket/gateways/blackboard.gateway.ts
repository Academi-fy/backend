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
import { GatewayMessage } from '../entities/gateway';
import { Gateway } from '../entities';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  constructor(private blackboardService: BlackboardService) {
    super();
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<GatewayMessage<CreateBlackboardDto> | Error> {
    return this.handleBlackboardAction<CreateBlackboardDto>(
      body,
      'create',
      'RECEIVED_BLACKBOARD_CREATE',
    );
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<GatewayMessage<EditBlackboardDto> | Error> {
    return this.handleBlackboardAction<EditBlackboardDto>(
      body,
      'edit',
      'RECEIVED_BLACKBOARD_UPDATE',
    );
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<never>,
  ): Promise<GatewayMessage<never> | Error> {
    return this.handleBlackboardAction<never>(
      body,
      'delete',
      'RECEIVED_BLACKBOARD_DELETE',
    );
  }

  private async handleBlackboardAction<
    T extends CreateBlackboardDto | EditBlackboardDto | never,
  >(
    body: GatewayMessage<T>,
    action: 'create' | 'edit' | 'delete',
    event: string,
  ): Promise<GatewayMessage<T> | Error> {
    const data = await this.validateData<GatewayMessage<T>>(
      body,
      GatewayMessage<T>,
    );
    if (data instanceof Error) return data;

    let blackboard: Blackboard;
    const actions = {
      create: async (data: GatewayMessage<T>) => {
        return await this.blackboardService.createBlackboard(
          data.value as CreateBlackboardDto,
        );
      },
      edit: async (data: GatewayMessage<T>) => {
        return await this.blackboardService.editBlackboard(
          data.modifyId,
          data.value as EditBlackboardDto,
        );
      },
      delete: async (data: GatewayMessage<T>) => {
        return await this.blackboardService.deleteBlackboard(data.modifyId);
      },
    };

    if (actions[action]) {
      blackboard = await actions[action](data);
    }

    this.emitToMembers(blackboard, event);

    return data;
  }

  private emitToMembers(blackboard: Blackboard, event: string) {
    blackboard.school.members.forEach((member: User) => {
      this.clients.get(member.id)?.emit(event, blackboard);
    });
  }
}
