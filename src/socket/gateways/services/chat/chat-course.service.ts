import { Service } from '@/service';
import { Injectable } from '@nestjs/common';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ChatCourseMutation } from '@/socket/entities/chat';
import { Chat, Course } from '@/@generated-types';
import { ChatCourseResult } from '@/socket/gateways/services/chat/entities/chat-course-result.entity';
import { UserChatService } from '@/rest/user-chat/user-chat.service';
import { CourseService } from '@/rest/course/course.service';
import { ChatService } from '@/rest/chat/services/chat.service';

@Injectable()
export class ChatCourseService extends Service {
  constructor(
    private readonly chatService: ChatService,
    private readonly courseService: CourseService,
    private readonly userChatService: UserChatService,
  ) {
    super();
  }

  async executeChatCourseAdd(
    body: GatewayMessage<ChatCourseMutation>,
  ): Promise<Error | ChatCourseResult> {
    const data: Error | GatewayMessage<ChatCourseMutation> =
      await this.validateData<GatewayMessage<ChatCourseMutation>>(
        body,
        GatewayMessage<ChatCourseMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const course: Course = await this.courseService.getCourseById(
      data.value.courseId,
    );

    for (const member of course.members) {
      await this.userChatService.createUserChat({
        chat: chat.id,
        user: member.id,
      });
    }

    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      targets: chat.courses
        .map((course: Course) => course.id)
        .concat(data.value.courseId),
    });

    return { data, modifiedChat, course };
  }

  async executeChatCourseRemove(
    body: GatewayMessage<ChatCourseMutation>,
  ): Promise<Error | ChatCourseResult> {
    const data: Error | GatewayMessage<ChatCourseMutation> =
      await this.validateData<GatewayMessage<ChatCourseMutation>>(
        body,
        GatewayMessage<ChatCourseMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const course: Course = await this.courseService.getCourseById(
      data.value.courseId,
    );

    for (const member of course.members) {
      await this.userChatService.deleteUserChatByCredentials(
        member.id,
        chat.id,
      );
    }

    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      targets: chat.courses
        .map((currentCourse: Course) => currentCourse.id)
        .filter((currentCourseId: string) => currentCourseId !== course.id),
    });

    return { data, modifiedChat, course };
  }
}
