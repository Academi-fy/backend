import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { EventResponse, Gateway } from '../gateway';
import { ChatService } from 'src/rest/chat';
import { GatewayMessage } from '../GatewayMessage';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
} from './chat.interfaces';
import { UserChatService } from 'src/rest/user-chat';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private chatService: ChatService,
    private userChatService: UserChatService,
  ) {
    super();
  }

  private async handleChatMutation(
    body: GatewayMessage<
      ChatTargetMutation | ChatCourseMutation | ChatClubMutation
    >,
    socketEvent: string,
    updateFunction: (chat: any, body: any) => any,
  ): Promise<EventResponse> {
    const chat = await this.chatService.getChatById(body.value.chatId);

    const updatedChat = await this.chatService.editChat(
      body.modifyId,
      updateFunction(chat, body),
    );

    updatedChat.targets.forEach(async (target) => {
      const user = await this.userChatService.getUserChatById(target.id);
      this.clients.get(user.id).emit(socketEvent, updatedChat);
    });

    return this.respond(socketEvent, updatedChat);
  }

  @SubscribeMessage('CHAT_TARGET_ADD')
  async handleChatTargetAdd(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<EventResponse> {
    return this.handleChatMutation(body, 'CHAT_TARGET_ADD', (chat, body) => ({
      targets: chat.targets
        .map((target) => target.id)
        .concat(body.value.targetId),
    }));
  }

  @SubscribeMessage('CHAT_TARGET_REMOVE')
  async handleChatTargetRemove(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<EventResponse> {
    return this.handleChatMutation(
      body,
      'CHAT_TARGET_REMOVE',
      (chat, body) => ({
        targets: chat.targets
          .map((target) => target.id)
          .filter((target) => target !== body.value.targetId),
      }),
    );
  }

  @SubscribeMessage('CHAT_COURSE_ADD')
  async handleChatCourseAdd(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<EventResponse> {
    return this.handleChatMutation(body, 'CHAT_COURSE_ADD', (chat, body) => ({
      courses: chat.courses
        .map((course) => course.id)
        .concat(body.value.courseId),
    }));
  }

  @SubscribeMessage('CHAT_COURSE_REMOVE')
  async handleChatCourseRemove(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<EventResponse> {
    return this.handleChatMutation(
      body,
      'CHAT_COURSE_REMOVE',
      (chat, body) => ({
        courses: chat.courses
          .map((course) => course.id)
          .filter((course) => course !== body.value.courseId),
      }),
    );
  }

  @SubscribeMessage('CHAT_CLUB_ADD')
  async handleChatClubAdd(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<EventResponse> {
    return this.handleChatMutation(body, 'CHAT_CLUB_ADD', (chat, body) => ({
      clubs: chat.clubs.map((club) => club.id).concat(body.value.clubId),
    }));
  }
}
