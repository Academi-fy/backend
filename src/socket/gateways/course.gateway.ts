import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { GatewayMessage } from '@/socket/entities/gateway';
import { Course, User } from '@/@generated-types';
import { Gateway } from '@/socket/entities';
import { CourseService } from '@/rest/course/course.service';
import { CourseUserMutation } from '@/socket/entities/course/course-user-mutation.entity';
import { CourseChatMutation } from '@/socket/entities/course/course-chat-mutation.entity';

@WebSocketGateway(SOCKET_PORT)
export class CourseGateway extends Gateway {
  constructor(private readonly courseService: CourseService) {
    super();
  }

  @SubscribeMessage('COURSE_USER_ADD')
  async handleCourseUserAdd(
    @MessageBody() body: GatewayMessage<CourseUserMutation>,
  ): Promise<GatewayMessage<CourseUserMutation> | Error> {
    const data: GatewayMessage<CourseUserMutation> | Error =
      await this.validateData<GatewayMessage<CourseUserMutation>>(
        body,
        GatewayMessage<CourseUserMutation>,
      );
    if (data instanceof Error) return data;

    const courseId: string = data.value.courseId;

    const course: Course = await this.courseService.getCourseById(courseId);
    if (!course) throw new Error(`Course '${courseId}' not found`);

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

    return data;
  }

  @SubscribeMessage('COURSE_USER_REMOVE')
  async handleCourseUserRemove(
    @MessageBody() body: GatewayMessage<CourseUserMutation>,
  ): Promise<GatewayMessage<CourseUserMutation> | Error> {
    const data: GatewayMessage<CourseUserMutation> | Error =
      await this.validateData<GatewayMessage<CourseUserMutation>>(
        body,
        GatewayMessage<CourseUserMutation>,
      );
    if (data instanceof Error) return data;

    const courseId: string = data.value.courseId;

    const course: Course = await this.courseService.getCourseById(courseId);
    if (!course) throw new Error(`Course '${courseId}' not found`);

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

    return data;
  }

  @SubscribeMessage('COURSE_CHAT_SET')
  async handleCourseChatSet(
    @MessageBody() body: GatewayMessage<CourseChatMutation>,
  ): Promise<GatewayMessage<CourseChatMutation> | Error> {
    const data: GatewayMessage<CourseChatMutation> | Error =
      await this.validateData<GatewayMessage<CourseChatMutation>>(
        body,
        GatewayMessage<CourseChatMutation>,
      );
    if (data instanceof Error) return data;

    const courseId: string = data.value.courseId;

    const course: Course = await this.courseService.getCourseById(courseId);
    if (!course) throw new Error(`Course '${courseId}' not found`);

    const modifiedCourse: Course = await this.courseService.editCourse(
      courseId,
      {
        chat: data.value.chatId,
      },
    );

    for (const member of modifiedCourse.members) {
      this.emit(member.id, 'RECEIVED_COURSE_USER_REMOVE', modifiedCourse);
    }

    return data;
  }
}
