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
} from '../entities/chat/';
import { GatewayMessage } from '../entities/gateway-message.entity';
import { Typing } from '../entities/chat/typing.entity';
import { ChatService } from '@/rest/chat/chat.service';
import { SOCKET_PORT } from '@/constants';
import { UserService } from '@/rest/user/user.service';
import {
  ActivityChatAddAction,
  ActivityChatRemoveAction,
} from '@/socket/entities/chat-activity/chat/activity-chat-actions.entity';
import {
  ActivityChatTargetAdd,
  ActivityChatTargetRemove,
} from '@/socket/entities/chat-activity/chat/chat-target-actions.entity';
import { CourseService } from '@/rest/course/course.service';
import {
  ActivityChatCourseAdd,
  ActivityChatCourseRemove,
} from '@/socket/entities/chat-activity/chat/chat-course-actions.entity';
import { Gateway } from '@/socket/entities/gateway.entity';
import { ClubService } from '@/rest/club/club.service';
import { ActivityChatClubMutation } from '@/socket/entities/chat-activity/chat/chat-club-actions.entity';
import { ChatNameChange } from '@/socket/entities/chat-activity/chat/chat-name-change.entity';
import { ChatAvatarChange } from '@/socket/entities/chat-activity/chat/chat-avatar-change.entity';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService,
    private readonly courseService: CourseService,
    private readonly clubService: ClubService,
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

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .concat(data.value.targetId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_TARGET_ADD', modifiedChat);
    }

    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    await this.createChatActivity<ActivityChatAddAction<ActivityChatTargetAdd>>(
      {
        sender: data.sender,
        value: {
          chat: chatId,
          type: ChatActivityType.CHAT_TARGET_ADD,
          executor: data.sender,
          activityContent: {
            chatName: modifiedChat.name,
            added: {
              chatId: chatId,
              targetId: target.id,
              firstName: target.firstName,
              lastName: target.lastName,
              avatar: target.avatar,
            },
            addedId: data.value.targetId,
          },
        },
      },
    );

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

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .filter((userId: string) => userId !== data.value.targetId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_TARGET_REMOVE', modifiedChat);
    }

    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatTargetRemove>
    >({
      sender: data.sender,
      value: {
        chat: chatId,
        type: ChatActivityType.CHAT_TARGET_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: modifiedChat.name,
          removed: {
            chatId: chatId,
            targetId: target.id,
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
    const chat: Chat = await this.chatService.getChatById(chatId);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.courses
        .map((course: Course) => course.id)
        .concat(data.value.courseId),
    });

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_COURSE_ADD', modifiedChat);
    }

    const course: Course = await this.courseService.getCourseById(
      data.value.courseId,
    );

    await this.createChatActivity<ActivityChatAddAction<ActivityChatCourseAdd>>(
      {
        sender: data.sender,
        value: {
          chat: chatId,
          type: ChatActivityType.CHAT_COURSE_ADD,
          executor: data.sender,
          activityContent: {
            chatName: modifiedChat.name,
            added: {
              chatId: chatId,
              courseId: course.id,
              name: course.name,
            },
            addedId: data.value.courseId,
          },
        },
      },
    );

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
    const chat: Chat = await this.chatService.getChatById(chatId);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.courses
        .map((course: Course) => course.id)
        .filter((courseId: string) => courseId !== data.value.courseId),
    });

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_COURSE_REMOVE', modifiedChat);
    }

    const course: Course = await this.courseService.getCourseById(
      data.value.courseId,
    );

    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatCourseRemove>
    >({
      sender: data.sender,
      value: {
        chat: chatId,
        type: ChatActivityType.CHAT_COURSE_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: modifiedChat.name,
          removed: {
            chatId: chatId,
            courseId: course.id,
            name: course.name,
          },
          removedId: data.value.courseId,
        },
      },
    });

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
    const chat: Chat = await this.chatService.getChatById(chatId);

    const modifiedChat: Chat = await this.chatService.editChat(chatId, {
      targets: chat.clubs
        .map((club: Club) => club.id)
        .concat(data.value.clubId),
    });

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_CLUB_ADD', modifiedChat);
    }

    const club: Club = await this.clubService.getClubById(data.value.clubId);
    await this.handleChatClubMutation(data, club, modifiedChat);

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

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(
      data.value.chatId,
      {
        targets: chat.clubs
          .map((club: Club) => club.id)
          .filter((clubId: string) => clubId !== data.value.clubId),
      },
    );

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_CLUB_REMOVE', modifiedChat);
    }

    const club: Club = await this.clubService.getClubById(data.value.clubId);
    await this.handleChatClubMutation(data, club, modifiedChat);

    return data;
  }

  private async handleChatClubMutation(
    data: GatewayMessage<ChatClubMutation>,
    club: Club,
    modifiedChat: Chat,
  ) {
    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatClubMutation>
    >({
      sender: data.sender,
      value: {
        chat: data.value.chatId,
        type: ChatActivityType.CHAT_CLUB_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: modifiedChat.name,
          removed: {
            name: club.name,
            avatar: club.avatar,
          },
          removedId: data.value.clubId,
        },
      },
    });
  }

  @SubscribeMessage('CHAT_NAME_CHANGE')
  async handleChatNameChange(
    @MessageBody() body: GatewayMessage<ChatNameChange>,
  ): Promise<GatewayMessage<ChatNameChange> | Error> {
    const data: Error | GatewayMessage<ChatNameChange> =
      await this.validateData<GatewayMessage<ChatNameChange>>(
        body,
        GatewayMessage<ChatNameChange>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(
      data.value.chatId,
      {
        name: data.value.name,
      },
    );

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_NAME_CHANGE', modifiedChat);
    }

    await this.createChatActivity<ChatNameChange>({
      sender: data.sender,
      value: {
        chat: modifiedChat.id,
        type: ChatActivityType.CHAT_NAME_CHANGE,
        executor: data.sender,
        activityContent: {
          chatId: modifiedChat.id,
          name: modifiedChat.name,
          oldName: chat.name,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('CHAT_AVATAR_CHANGE')
  async handleAvatarNameChange(
    @MessageBody() body: GatewayMessage<ChatAvatarChange>,
  ): Promise<GatewayMessage<ChatAvatarChange> | Error> {
    const data: Error | GatewayMessage<ChatAvatarChange> =
      await this.validateData<GatewayMessage<ChatAvatarChange>>(
        body,
        GatewayMessage<ChatAvatarChange>,
      );
    if (data instanceof Error) return data;

    const modifiedChat: Chat = await this.chatService.editChat(
      data.value.chatId,
      {
        avatar: data.value.avatar,
      },
    );

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_CHAT_AVATAR_CHANGE', modifiedChat);
    }

    await this.createChatActivity<ChatAvatarChange>({
      sender: data.sender,
      value: {
        chat: modifiedChat.id,
        type: ChatActivityType.CHAT_AVATAR_CHANGE,
        executor: data.sender,
        activityContent: {
          chatId: modifiedChat.id,
          avatar: modifiedChat.avatar,
        },
      },
    });

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

    for (const targetChat of chat.targets) {
      this.emit(targetChat.userId, 'RECEIVED_TYPING', data);
    }

    return data;
  }
}
