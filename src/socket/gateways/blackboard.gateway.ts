import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Blackboard, School } from '@/@generated-types';
import { BlackboardService } from '@/rest/blackboard/blackboard.service';
import { CreateBlackboardDto, EditBlackboardDto } from '@/rest/blackboard';

import { Gateway } from '../entities';
import { GatewayMessage } from '../entities/gateway';
import { SOCKET_PORT } from '@/constants';
import { SchoolService } from '@/rest/school/school.service';

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
    if (!createdBlackboard)
      throw new Error(`Blackboard could not be created with data: ${data}`);

    const school: School = await this.schoolService.getSchoolById(
      createdBlackboard.school.id,
    );
    if (!school)
      throw new Error(`School '${createdBlackboard.school.id}' not found`);

    for (const member of school.members) {
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

    const blackboardId: string = data.modifyId;

    const modifiedBlackboard: Blackboard =
      await this.blackboardService.editBlackboard(blackboardId, data.value);
    if (!modifiedBlackboard)
      throw new Error(`Blackboard '${blackboardId}' not found`);

    const school: School = await this.schoolService.getSchoolById(
      modifiedBlackboard.school.id,
    );
    if (!school)
      throw new Error(`School '${modifiedBlackboard.school.id}' not found`);

    for (const member of school.members) {
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

    const blackboardId: string = data.modifyId;

    const deletedBlackboard: Blackboard =
      await this.blackboardService.deleteBlackboard(blackboardId);
    if (!deletedBlackboard)
      throw new Error(`Blackboard '${blackboardId}' not found`);

    const school: School = await this.schoolService.getSchoolById(
      deletedBlackboard.school.id,
    );
    if (!school)
      throw new Error(`School '${deletedBlackboard.school.id}' not found`);

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_BLACKBOARD_DELETE', data);
    }

    return data;
  }
}
