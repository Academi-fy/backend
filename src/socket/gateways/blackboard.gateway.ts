import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Blackboard } from '../../@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from '../../rest/blackboard';
import { BlackboardService } from '../../rest/blackboard/blackboard.service';
import { Gateway } from '../entities';
import { GatewayMessage } from '../entities/gateway';
import { SOCKET_PORT } from '../../constants';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  constructor(private blackboardService: BlackboardService) {
    super();
  }

  @SubscribeMessage('BLACKBOARD_CREATE')
  async handleBlackboardCreate(
    @MessageBody() body: GatewayMessage<CreateBlackboardDto>,
  ): Promise<GatewayMessage<CreateBlackboardDto> | Error> {
    const data: GatewayMessage<CreateBlackboardDto> | Error =
      await this.validateData<GatewayMessage<CreateBlackboardDto>>(
        body,
        GatewayMessage<CreateBlackboardDto>,
      );
    if (data instanceof Error) return data;

    const blackboard: Blackboard =
      await this.blackboardService.createBlackboard(data.value);

    for (const member of blackboard.school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_CREATE', data);
    }

    return data;
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<EditBlackboardDto>,
  ): Promise<GatewayMessage<EditBlackboardDto> | Error> {
    const data: GatewayMessage<EditBlackboardDto> | Error =
      await this.validateData<GatewayMessage<EditBlackboardDto>>(
        body,
        GatewayMessage<EditBlackboardDto>,
      );
    if (data instanceof Error) return data;

    const blackboard: Blackboard = await this.blackboardService.editBlackboard(
      data.modifyId,
      data.value,
    );

    for (const member of blackboard.school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_UPDATE', data);
    }

    return data;
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<never>,
  ): Promise<GatewayMessage<never> | Error> {
    const data: GatewayMessage<never> | Error = await this.validateData<
      GatewayMessage<never>
    >(body, GatewayMessage<never>);
    if (data instanceof Error) return data;

    const blackboard: Blackboard =
      await this.blackboardService.deleteBlackboard(data.modifyId);

    for (const member of blackboard.school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_DELETE', data);
    }

    return data;
  }
}
