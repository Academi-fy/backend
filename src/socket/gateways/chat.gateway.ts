import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import {
  Chat,
  ChatActivityType,
  Club,
  Course,
  User,
  UserChat,
} from '@/@generated-types';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
  Gateway,
} from '../entities';
import { GatewayMessage } from '../entities/gateway';
import { Typing } from '../entities/chat/typing.entity';
import { ChatService } from 'src/rest/chat/chat.service';
import { SOCKET_PORT } from 'src/constants';
import { ChatActivityGateway } from '@/socket/gateways/chat-activity.gateway';
import { UserService } from '@/rest/user/user.service';
import { ActivityChatAdd } from '@/socket/entities/chat-activity/activity-chat-add.entity';
import {
  ActivityChatTargetAdd,
  ActivityChatTargetRemove,
} from '@/socket/entities/chat-activity/chat-mutations/activity-chat-target.entity';
import { ActivityChatRemove } from '@/socket/entities/chat-activity/activity-chat-remove.entity';
import { CourseService } from '@/rest/course/course.service';
import { ActivityChatCourseAdd } from '@/socket/entities/chat-activity/chat-mutations/activity-chat-course.entity';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService,
    private readonly courseService: CourseService,
  ) {
    super();
  }

  @SubscribeMessage('CHAT_TARGET_ADD')
  async handleChatTargetAdd(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayMessage<ChatTargetMutation> | Error> {
    const data: Error | GatewayMessage<ChatTargetMutation> =
      await this.validateData<GatewayMessage<ChatTargetMutation>>(
        body,
        GatewayMessage<ChatTargetMutation>,
      );
    if (data instanceof Error) return data;

    const chatId: string = data.value.chatId;

    const chat: Chat = await this.chatService.getChatById(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .concat(data.value.targetId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${chatId}' could not be modified`);

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_TARGET_ADD', modifiedChat);
    }

    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    await ChatActivityGateway.prototype.handleChatActivityCreate<
      ActivityChatAdd<ActivityChatTargetAdd>
    >({
      sender: data.sender,
      modifyId: chatId,
      value: {
        chat: chatId,
        type: ChatActivityType.CHAT_TARGET_ADD,
        executor: data.sender,
        value: {
          added: {
            firstName: target.firstName,
            lastName: target.lastName,
            avatar: target.avatar,
          },
          addedId: data.value.targetId,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('CHAT_TARGET_REMOVE')
  async handleChatTargetRemove(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayMessage<ChatTargetMutation> | Error> {
    const data: Error | GatewayMessage<ChatTargetMutation> =
      await this.validateData<GatewayMessage<ChatTargetMutation>>(
        body,
        GatewayMessage<ChatTargetMutation>,
      );
    if (data instanceof Error) return data;

    const chatId: string = data.value.chatId;

    const chat: Chat = await this.chatService.getChatById(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .filter((userId: string) => userId !== data.value.targetId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${chatId}' could not be modified`);

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_TARGET_REMOVE', modifiedChat);
    }

    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    await ChatActivityGateway.prototype.handleChatActivityCreate<
      ActivityChatRemove<ActivityChatTargetRemove>
    >({
      sender: data.sender,
      modifyId: chatId,
      value: {
        chat: chatId,
        type: ChatActivityType.CHAT_TARGET_ADD,
        executor: data.sender,
        value: {
          removed: {
            firstName: target.firstName,
            lastName: target.lastName,
            avatar: target.avatar,
          },
          removedId: data.value.targetId,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('CHAT_COURSE_ADD')
  async handleChatCourseAdd(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayMessage<ChatCourseMutation> | Error> {
    const data: Error | GatewayMessage<ChatCourseMutation> =
      await this.validateData<GatewayMessage<ChatCourseMutation>>(
        body,
        GatewayMessage<ChatCourseMutation>,
      );
    if (data instanceof Error) return data;

    const chatId: string = data.value.chatId;

    const chat: Chat = await this.findChat(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.courses
        .map((course: Course) => course.id)
        .concat(data.value.courseId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${chatId}' could not be modified`);

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_COURSE_ADD', modifiedChat);
    }

    const course: Course = await this.courseService.getCourseById(
      data.value.courseId,
    );

    await ChatActivityGateway.prototype.handleChatActivityCreate<
      ActivityChatAdd<ActivityChatCourseAdd>
    >({
      sender: data.sender,
      modifyId: chatId,
      value: {
        chat: chatId,
        type: ChatActivityType.CHAT_TARGET_ADD,
        executor: data.sender,
        value: {
          added: {
            name: course.name,
          },
          addedId: data.value.courseId,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('CHAT_COURSE_REMOVE')
  async handleChatCourseRemove(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayMessage<ChatCourseMutation> | Error> {
    const data: Error | GatewayMessage<ChatCourseMutation> =
      await this.validateData<GatewayMessage<ChatCourseMutation>>(
        body,
        GatewayMessage<ChatCourseMutation>,
      );
    if (data instanceof Error) return data;

    const chatId: string = data.value.chatId;

    const chat: Chat = await this.findChat(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.courses
        .map((course: Course) => course.id)
        .filter((courseId: string) => courseId !== data.value.courseId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${chatId}' could not be modified`);

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_COURSE_REMOVE', modifiedChat);
    }

    return data;
  }

  @SubscribeMessage('CHAT_CLUB_ADD')
  async handleChatClubAdd(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayMessage<ChatClubMutation> | Error> {
    const data: Error | GatewayMessage<ChatClubMutation> =
      await this.validateData<GatewayMessage<ChatClubMutation>>(
        body,
        GatewayMessage<ChatClubMutation>,
      );
    if (data instanceof Error) return data;

    const chatId: string = data.value.chatId;

    const chat: Chat = await this.findChat(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.clubs
        .map((club: Club) => club.id)
        .concat(data.value.clubId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${chatId}' could not be modified`);

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_CLUB_ADD', modifiedChat);
    }

    return data;
  }

  @SubscribeMessage('CHAT_CLUB_REMOVE')
  async handleChatClubRemove(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayMessage<ChatClubMutation> | Error> {
    const data: Error | GatewayMessage<ChatClubMutation> =
      await this.validateData<GatewayMessage<ChatClubMutation>>(
        body,
        GatewayMessage<ChatClubMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.findChat(data.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(data.modifyId, {
      targets: chat.clubs
        .map((club: Club) => club.id)
        .filter((clubId: string) => clubId !== data.value.clubId),
    });
    if (!modifiedChat)
      throw new Error(`Chat '${data.value.chatId}' could not be modified`);

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_CLUB_REMOVE', modifiedChat);
    }

    return data;
  }

  @SubscribeMessage('TYPING')
  async handleTyping(
    @MessageBody() body: GatewayMessage<Typing>,
  ): Promise<GatewayMessage<Typing> | Error> {
    const data: Error | GatewayMessage<Typing> = await this.validateData<
      GatewayMessage<Typing>
    >(body, GatewayMessage<Typing>);
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    if (!chat) throw new Error(`Chat '${data.value.chatId}' not found`);

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_TYPING', data);
    }

    return data;
  }

  private async findChat(chatId: string): Promise<Chat> {
    const chat: Chat = await this.chatService.getChatById(chatId);
    if (!chat) throw new Error(`Chat '${chatId}' not found`);
    return chat;
  }
}
