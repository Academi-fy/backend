import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Blackboard, School } from '@/@generated-types';
import { BlackboardService } from '@/rest/blackboard/services/blackboard.service';
import { CreateBlackboardDto } from '@/rest/blackboard';

import { Gateway } from '../entities/gateway.entity';
import { SOCKET_PORT } from '@/constants';
import { SchoolService } from '@/rest/school/school.service';
import { BlackboardUpdate } from '@/socket/entities/blackboard/blackboard-update.entity';
import { BlackboardDelete } from '@/socket/entities/blackboard/blackboard-delete.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import response_codes from '@/response-codes.json';
import { GatewayResponse } from '@/socket/entities/gateway-response.entity';

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
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<CreateBlackboardDto> | Error =
      await this.validateData<GatewayMessage<CreateBlackboardDto>>(
        body,
        GatewayMessage<CreateBlackboardDto>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.blackboard.creation.failed,
        data,
      );

    const createdBlackboard: Blackboard =
      await this.blackboardService.createBlackboard(data.value);
    if (!createdBlackboard)
      return new GatewayResponse(
        true,
        response_codes.blackboard.creation.failed,
      );

    const school: School = await this.schoolService.getSchoolById(
      createdBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_CREATE', data);
    }

    return new GatewayResponse(
      false,
      response_codes.blackboard.creation.success,
    );
  }

  @SubscribeMessage('BLACKBOARD_UPDATE')
  async handleBlackboardUpdate(
    @MessageBody() body: GatewayMessage<BlackboardUpdate>,
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<BlackboardUpdate> | Error =
      await this.validateData<GatewayMessage<BlackboardUpdate>>(
        body,
        GatewayMessage<BlackboardUpdate>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.blackboard.update.failed,
        data,
      );

    const blackboardId: string = data.value.blackboardId;

    const modifiedBlackboard: Blackboard =
      await this.blackboardService.editBlackboard(blackboardId, data.value);
    if (!modifiedBlackboard)
      return new GatewayResponse(true, response_codes.blackboard.update.failed);

    const school: School = await this.schoolService.getSchoolById(
      modifiedBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_UPDATE', data);
    }

    return new GatewayResponse(false, response_codes.blackboard.update.success);
  }

  @SubscribeMessage('BLACKBOARD_DELETE')
  async handleBlackboardDelete(
    @MessageBody() body: GatewayMessage<BlackboardDelete>,
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<BlackboardDelete> | Error =
      await this.validateData<GatewayMessage<BlackboardDelete>>(
        body,
        GatewayMessage<never>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.blackboard.deletion.failed,
        data,
      );

    const blackboardId: string = data.value.blackboardId;

    const deletedBlackboard: Blackboard =
      await this.blackboardService.deleteBlackboard(blackboardId);
    if (!deletedBlackboard)
      return new GatewayResponse(
        true,
        response_codes.blackboard.deletion.failed,
      );

    const school: School = await this.schoolService.getSchoolById(
      deletedBlackboard.school.id,
    );

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_DELETE', data);
    }

    return new GatewayResponse(
      false,
      response_codes.blackboard.deletion.success,
    );
  }
}
