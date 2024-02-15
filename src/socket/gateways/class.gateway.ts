import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Class, Course, User } from '@/@generated-types';
import { ClassCourseMutation, ClassUserMutation } from '../entities/class';
import { Gateway } from '../entities';
import { GatewayMessage } from '../entities/gateway';
import { ClassService } from 'src/rest/class/class.service';
import { SOCKET_PORT } from '@/constants';

@WebSocketGateway(SOCKET_PORT)
export class ClassGateway extends Gateway {
  constructor(private classService: ClassService) {
    super();
  }

  @SubscribeMessage('CLASS_COURSE_ADD')
  async handleClassCourseAdd(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<GatewayMessage<ClassCourseMutation> | Error> {
    const data: Error | GatewayMessage<ClassCourseMutation> =
      await this.validateData<GatewayMessage<ClassCourseMutation>>(
        body,
        GatewayMessage<ClassCourseMutation>,
      );
    if (data instanceof Error) return data;

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      courses: class_.courses
        .map((course: Course) => course.id)
        .concat(data.value.courseId),
    });

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_COURSE_ADD', data);
    }

    return data;
  }

  @SubscribeMessage('CLASS_COURSE_REMOVE')
  async handleClassCourseRemove(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<GatewayMessage<ClassCourseMutation> | Error> {
    const data: Error | GatewayMessage<ClassCourseMutation> =
      await this.validateData<GatewayMessage<ClassCourseMutation>>(
        body,
        GatewayMessage<ClassCourseMutation>,
      );
    if (data instanceof Error) return data;

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      courses: class_.courses
        .map((course: Course) => course.id)
        .filter((courseId: string) => courseId !== data.value.courseId),
    });

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_COURSE_REMOVE', data);
    }

    return data;
  }

  @SubscribeMessage('CLASS_USER_ADD')
  async handleClassUserAdd(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<GatewayMessage<ClassUserMutation> | Error> {
    const data: Error | GatewayMessage<ClassUserMutation> =
      await this.validateData<GatewayMessage<ClassUserMutation>>(
        body,
        GatewayMessage<ClassUserMutation>,
      );
    if (data instanceof Error) return data;

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      members: class_.members
        .map((member: User) => member.id)
        .concat(data.value.userId),
    });

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_USER_ADD', data);
    }

    return data;
  }

  @SubscribeMessage('CLASS_USER_REMOVE')
  async handleClassUserRemove(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<GatewayMessage<ClassUserMutation> | Error> {
    const data: Error | GatewayMessage<ClassUserMutation> =
      await this.validateData<GatewayMessage<ClassUserMutation>>(
        body,
        GatewayMessage<ClassUserMutation>,
      );
    if (data instanceof Error) return data;

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      members: class_.members
        .map((member: User) => member.id)
        .filter((memberId: string) => memberId !== data.value.userId),
    });

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_USER_REMOVE', data);
    }

    return data;
  }
}
