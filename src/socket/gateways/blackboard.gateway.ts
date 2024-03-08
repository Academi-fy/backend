import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Blackboard, School } from '@/@generated-types';
import { BlackboardService } from '@/rest/blackboard/blackboard.service';
import { CreateBlackboardDto } from '@/rest/blackboard';

import { Gateway } from '../entities/gateway.entity';
import { SOCKET_PORT } from '@/constants';
import { SchoolService } from '@/rest/school/school.service';
import { BlackboardUpdate } from '@/socket/entities/blackboard/blackboard-update.entity';
import { BlackboardDelete } from '@/socket/entities/blackboard/blackboard-delete.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

@WebSocketGateway(SOCKET_PORT)
export class BlackboardGateway extends Gateway {
  constructor(
    private readonly blackboardService: BlackboardService,
    private readonly schoolService: SchoolService,
  ) {
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

    const createdBlackboard: Blackboard =
      await this.blackboardService.createBlackboard(data.value);

    const school: School = await this.schoolService.getSchoolById(
      createdBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_CREATE', data);
    }

    return data;
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<BlackboardUpdate>,
  ): Promise<GatewayMessage<BlackboardUpdate> | Error> {
    const data: GatewayMessage<BlackboardUpdate> | Error =
      await this.validateData<GatewayMessage<BlackboardUpdate>>(
        body,
        GatewayMessage<BlackboardUpdate>,
      );
    if (data instanceof Error) return data;

    const blackboardId: string = data.value.blackboardId;

    const modifiedBlackboard: Blackboard =
      await this.blackboardService.editBlackboard(blackboardId, data.value);

    const school: School = await this.schoolService.getSchoolById(
      modifiedBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_UPDATE', data);
    }

    return data;
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<BlackboardDelete>,
  ): Promise<GatewayMessage<BlackboardDelete> | Error> {
    const data: GatewayMessage<BlackboardDelete> | Error =
      await this.validateData<GatewayMessage<BlackboardDelete>>(
        body,
        GatewayMessage<never>,
      );
    if (data instanceof Error) return data;

    const blackboardId: string = data.value.blackboardId;

    const deletedBlackboard: Blackboard =
      await this.blackboardService.deleteBlackboard(blackboardId);

    const school: School = await this.schoolService.getSchoolById(
      deletedBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_DELETE', data);
    }

    return data;
  }
}
