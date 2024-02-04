import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { ChatService } from 'src/rest/chat';
import { UserChatService } from 'src/rest/user-chat';

import { Chat, Club, Course, UserChat } from '../../@generated-types';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
  Gateway,
} from '../entities';
import { EventResponse, GatewayMessage } from '../entities/gateway';
import { UsePipes } from '@nestjs/common';
import { ValidateBodyInstancePipe } from '../validate-body-instance.pipe';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private chatService: ChatService,
    private userChatService: UserChatService,
  ) {
    super();
  }

  @SubscribeMessage('CHAT_TARGET_ADD')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatTargetMutation))
  async handleChatTargetAdd(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<EventResponse<Chat>> {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      targets: chat.targets
        .map((target: UserChat) => target.id)
        .concat(body.value.targetId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_TARGET_ADD', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_TARGET_ADD', modifiedChat);
  }

  @SubscribeMessage('CHAT_TARGET_REMOVE')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatTargetMutation))
  async handleChatTargetRemove(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<EventResponse<Chat>> {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      targets: chat.targets
        .map((target: UserChat) => target.id)
        .filter((targetId: string) => targetId !== body.value.targetId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_TARGET_REMOVE', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_TARGET_REMOVE', modifiedChat);
  }

  @SubscribeMessage('CHAT_COURSE_ADD')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatCourseMutation))
  async handleChatCourseAdd(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<EventResponse<Chat>> {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      courses: chat.courses
        .map((course: Course) => course.id)
        .concat(body.value.courseId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_COURSE_ADD', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_COURSE_ADD', modifiedChat);
  }

  @SubscribeMessage('CHAT_COURSE_REMOVE')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatCourseMutation))
  async handleChatCourseRemove(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<EventResponse<Chat>> {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      courses: chat.courses
        .map((course: Course) => course.id)
        .filter((courseId: string) => courseId !== body.value.courseId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_COURSE_REMOVE', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_COURSE_REMOVE', modifiedChat);
  }

  @SubscribeMessage('CHAT_CLUB_ADD')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatClubMutation))
  async handleChatClubAdd(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<EventResponse<Chat>> {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      clubs: chat.clubs.map((club: Club) => club.id).concat(body.value.clubId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_CLUB_ADD', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_CLUB_ADD', modifiedChat);
  }

  @SubscribeMessage('CHAT_CLUB_REMOVE')
  @UsePipes(new ValidateBodyInstancePipe(() => ChatClubMutation))
  async handleChatClubRemove(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ) {
    const chat: Chat = await this.chatService.getChatById(body.value.chatId);

    const modifiedChat: Chat = await this.chatService.editChat(body.modifyId, {
      clubs: chat.clubs
        .map((club: Club) => club.id)
        .filter((clubId: string) => clubId !== body.value.clubId),
    });

    for (const targetChat of modifiedChat.targets) {
      this.clients
        .get(targetChat.userId)
        .emit('RECEIVED_CHAT_CLUB_REMOVE', modifiedChat);
    }

    return this.respond('EXECUTED_CHAT_CLUB_REMOVE', modifiedChat);
  }
}
