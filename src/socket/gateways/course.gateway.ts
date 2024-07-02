import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Course, User } from '@/@generated-types';
import { Gateway } from '@/socket/entities/gateway.entity';
import { CourseService } from '@/rest/course/course.service';
import { CourseUserMutation } from '@/socket/entities/course/course-user-mutation.entity';
import { CourseChatMutation } from '@/socket/entities/course/course-chat-mutation.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { Response } from '@/response.entity';

import * as response_codes from '@/response-codes.json';
import { Logger } from '@nestjs/common';

@WebSocketGateway(SOCKET_PORT)
export class CourseGateway extends Gateway {
  constructor(private readonly courseService: CourseService) {
    super();
  }

  logger: Logger = new Logger('CourseGateway');

  @SubscribeMessage('COURSE_USER_ADD')
  async handleCourseUserAdd(
    @MessageBody() body: GatewayMessage<CourseUserMutation>,
  ): Promise<Response> {
    const data: GatewayMessage<CourseUserMutation> | Error =
      await this.validateData<GatewayMessage<CourseUserMutation>>(
        body,
        GatewayMessage<CourseUserMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.course.user_action.add.failed,
        data,
      );

    const courseId: string = data.value.courseId;

    const course: Course = await this.courseService.getCourseById(courseId);

    const modifiedCourse: Course = await this.courseService.editCourse(
      courseId,
      {
        members: course.members
          .map((member: User) => member.id)
          .concat(data.value.userId),
      },
    );

    for (const member of modifiedCourse.members) {
      this.emit(member.id, 'RECEIVED_COURSE_USER_ADD', modifiedCourse);
    }

    return new Response(false, response_codes.course.user_action.add.success);
  }

  @SubscribeMessage('COURSE_USER_REMOVE')
  async handleCourseUserRemove(
    @MessageBody() body: GatewayMessage<CourseUserMutation>,
  ): Promise<Response> {
    const data: GatewayMessage<CourseUserMutation> | Error =
      await this.validateData<GatewayMessage<CourseUserMutation>>(
        body,
        GatewayMessage<CourseUserMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.course.user_action.remove.failed,
        data,
      );

    const courseId: string = data.value.courseId;

    const course: Course = await this.courseService.getCourseById(courseId);

    const modifiedCourse: Course = await this.courseService.editCourse(
      courseId,
      {
        members: course.members
          .map((member: User) => member.id)
          .filter((memberId: string) => memberId !== data.value.userId),
      },
    );

    for (const member of modifiedCourse.members) {
      this.emit(member.id, 'RECEIVED_COURSE_USER_REMOVE', modifiedCourse);
    }

    return new Response(
      false,
      response_codes.course.user_action.remove.success,
    );
  }

  @SubscribeMessage('COURSE_CHAT_SET')
  async handleCourseChatSet(
    @MessageBody() body: GatewayMessage<CourseChatMutation>,
  ): Promise<Response> {
    const data: GatewayMessage<CourseChatMutation> | Error =
      await this.validateData<GatewayMessage<CourseChatMutation>>(
        body,
        GatewayMessage<CourseChatMutation>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.course.chat_action.set.failed,
        data,
      );

    const courseId: string = data.value.courseId;

    const modifiedCourse: Course = await this.courseService.editCourse(
      courseId,
      {
        chat: data.value.chatId,
      },
    );

    for (const member of modifiedCourse.members) {
      this.emit(member.id, 'RECEIVED_COURSE_USER_REMOVE', modifiedCourse);
    }

    return new Response(false, response_codes.course.chat_action.set.success);
  }
}
