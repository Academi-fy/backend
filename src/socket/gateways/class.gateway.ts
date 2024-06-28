import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Class, Course, User } from '@/@generated-types';
import { ClassCourseMutation, ClassUserMutation } from '../entities/class';
import { Gateway } from '../entities/gateway.entity';
import { ClassService } from 'src/rest/class/class.service';
import { SOCKET_PORT } from '@/constants';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { Response } from '@/response.entity';

import * as response_codes from '@/response-codes.json';

@WebSocketGateway(SOCKET_PORT)
export class ClassGateway extends Gateway {
  constructor(private classService: ClassService) {
    super();
  }

  @SubscribeMessage('CLASS_COURSE_ADD')
  async handleClassCourseAdd(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<Response> {
    const data: Error | GatewayMessage<ClassCourseMutation> =
      await this.validateData<GatewayMessage<ClassCourseMutation>>(
        body,
        GatewayMessage<ClassCourseMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.class.course_action.add.failed,
        data,
      );

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      courses: class_.courses
        .map((course: Course) => course.id)
        .concat(data.value.courseId),
    });
    if (!modifiedClass)
      throw new Error(`Class '${classId}' could not be modified`);

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_COURSE_ADD', data);
    }

    return new Response(false, response_codes.class.course_action.add.success);
  }

  @SubscribeMessage('CLASS_COURSE_REMOVE')
  async handleClassCourseRemove(
    @MessageBody() body: GatewayMessage<ClassCourseMutation>,
  ): Promise<Response> {
    const data: Error | GatewayMessage<ClassCourseMutation> =
      await this.validateData<GatewayMessage<ClassCourseMutation>>(
        body,
        GatewayMessage<ClassCourseMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.class.course_action.remove.failed,
        data,
      );

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      courses: class_.courses
        .map((course: Course) => course.id)
        .filter((courseId: string) => courseId !== data.value.courseId),
    });
    if (!modifiedClass)
      throw new Error(`Class '${classId}' could not be modified`);

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_COURSE_REMOVE', data);
    }

    return new Response(
      false,
      response_codes.class.course_action.remove.success,
    );
  }

  @SubscribeMessage('CLASS_USER_ADD')
  async handleClassUserAdd(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<Response> {
    const data: Error | GatewayMessage<ClassUserMutation> =
      await this.validateData<GatewayMessage<ClassUserMutation>>(
        body,
        GatewayMessage<ClassUserMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.class.user_action.add.failed,
        data,
      );

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      members: class_.members
        .map((member: User) => member.id)
        .concat(data.value.userId),
    });
    if (!modifiedClass)
      throw new Error(`Class '${classId}' could not be modified`);

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_USER_ADD', data);
    }

    return new Response(false, response_codes.class.user_action.add.success);
  }

  @SubscribeMessage('CLASS_USER_REMOVE')
  async handleClassUserRemove(
    @MessageBody() body: GatewayMessage<ClassUserMutation>,
  ): Promise<Response> {
    const data: Error | GatewayMessage<ClassUserMutation> =
      await this.validateData<GatewayMessage<ClassUserMutation>>(
        body,
        GatewayMessage<ClassUserMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.class.user_action.remove.failed,
        data,
      );

    const classId: string = data.value.classId;

    const class_: Class = await this.classService.getClassById(classId);
    if (!class_) throw new Error(`Class '${classId}' not found`);

    const modifiedClass: Class = await this.classService.editClass(classId, {
      members: class_.members
        .map((member: User) => member.id)
        .filter((memberId: string) => memberId !== data.value.userId),
    });
    if (!modifiedClass)
      throw new Error(`Class '${classId}' could not be modified`);

    for (const member of modifiedClass.members) {
      this.emit(member.id, 'RECEIVED_CLASS_USER_REMOVE', data);
    }

    return new Response(false, response_codes.class.user_action.remove.success);
  }
}
