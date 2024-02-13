import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ClassService } from 'src/rest/class';
import { Gateway } from '../entities';
import { SOCKET_PORT } from '../../constants';
import { GatewayMessage } from '../entities/gateway';
import { ClassCourseMutation, ClassUserMutation } from '../entities/class';
import { Class } from '../../@generated-types';

@WebSocketGateway(SOCKET_PORT)
export class ClassGateway extends Gateway {
  constructor(private classService: ClassService) {
    super();
  }

  @SubscribeMessage('CLASS_COURSE_ADD')
  async handleClassCourseAdd(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<GatewayMessage<ClassCourseMutation> | Error> {
    return this.handleClassMutation(
      body,
      'courses',
      'RECEIVED_CLASS_COURSE_ADD',
      false,
    );
  }

  @SubscribeMessage('CLASS_COURSE_REMOVE')
  async handleClassCourseRemove(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<GatewayMessage<ClassCourseMutation> | Error> {
    return this.handleClassMutation(
      body,
      'courses',
      'RECEIVED_CLASS_COURSE_REMOVE',
      true,
    );
  }

  @SubscribeMessage('CLASS_USER_ADD')
  async handleClassUserAdd(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<GatewayMessage<ClassUserMutation> | Error> {
    return this.handleClassMutation(
      body,
      'members',
      'RECEIVED_CLASS_USER_ADD',
      false,
    );
  }

  @SubscribeMessage('CLASS_USER_REMOVE')
  async handleClassUserRemove(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<GatewayMessage<ClassUserMutation> | Error> {
    return this.handleClassMutation(
      body,
      'members',
      'RECEIVED_CLASS_USER_REMOVE',
      true,
    );
  }

  private async handleClassMutation<T>(
    body: GatewayMessage<T>,
    field: 'courses' | 'members',
    event: string,
    remove: boolean = false,
  ): Promise<GatewayMessage<T> | Error> {
    const data: Error | GatewayMessage<any> = await this.validateData<
      GatewayMessage<any>
    >(body, GatewayMessage<T>);
    if (data instanceof Error) return data;

    const class_: Class = await this.classService.getClassById(
      data.value.classId,
    );
    if (!class_) throw new Error(`Class '${data.value.classId}' not found`);

    const identifiers: any[] = class_[field].map((item: any) => item.id);

    if (remove) {
      identifiers.filter((id: string) => id !== data.value.targetId);
    } else {
      identifiers.push(data.value.targetId);
    }

    const modifiedClass: Class = await this.classService.editClass(
      data.value.classId,
      {
        [field]: identifiers,
      },
    );

    for (const member of modifiedClass.members) {
      this.emit(member.id, event, data);
    }

    return data;
  }
}
