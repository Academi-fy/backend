import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { ChatService } from 'src/rest/chat';
import { UserChatService } from 'src/rest/user-chat';

import { Chat } from '../../@generated-types';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
  Gateway,
} from '../entities';
import { GatewayMessage } from '../entities/gateway';
import { Typing } from '../entities/chat/typing.entity';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private chatService: ChatService,
    private userChatService: UserChatService,
  ) {
    super();
  }

  @SubscribeMessage('CHAT_TARGET_ADD')
  async handleChatTargetAdd(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayMessage<ChatTargetMutation> | Error> {
    return this.handleChatMutation<ChatTargetMutation>(
      body,
      'targets',
      'RECEIVED_CHAT_TARGET_ADD',
    );
  }

  @SubscribeMessage('CHAT_TARGET_REMOVE')
  async handleChatTargetRemove(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayMessage<ChatTargetMutation> | Error> {
    return this.handleChatMutation<ChatTargetMutation>(
      body,
      'targets',
      'RECEIVED_CHAT_TARGET_REMOVE',
      true,
    );
  }

  @SubscribeMessage('CHAT_COURSE_ADD')
  async handleChatCourseAdd(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayMessage<ChatCourseMutation> | Error> {
    return this.handleChatMutation<ChatCourseMutation>(
      body,
      'courses',
      'RECEIVED_CHAT_COURSE_ADD',
    );
  }

  @SubscribeMessage('CHAT_COURSE_REMOVE')
  async handleChatCourseRemove(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayMessage<ChatCourseMutation> | Error> {
    return this.handleChatMutation<ChatCourseMutation>(
      body,
      'courses',
      'RECEIVED_CHAT_COURSE_REMOVE',
      true,
    );
  }

  @SubscribeMessage('CHAT_CLUB_ADD')
  async handleChatClubAdd(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayMessage<ChatClubMutation> | Error> {
    return this.handleChatMutation<ChatClubMutation>(
      body,
      'clubs',
      'RECEIVED_CHAT_CLUB_ADD',
    );
  }

  @SubscribeMessage('CHAT_CLUB_REMOVE')
  async handleChatClubRemove(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayMessage<ChatClubMutation> | Error> {
    return this.handleChatMutation<ChatClubMutation>(
      body,
      'clubs',
      'RECEIVED_CHAT_CLUB_REMOVE',
      true,
    );
  }

  private async handleChatMutation<T>(
    body: GatewayMessage<T>,
    field: 'targets' | 'courses' | 'clubs',
    event: string,
    remove: boolean = false,
  ): Promise<GatewayMessage<T> | Error> {
    const data: Error | GatewayMessage<any> = await this.validateData<
      GatewayMessage<any>
    >(body, GatewayMessage<T>);
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    if (!chat) throw new Error(`Chat '${data.value.chatId}' not found`);

    const identifiers: any[] = chat[field].map((item: any) => item.id);

    if (remove) {
      identifiers.filter((id: string) => id !== data.value.targetId);
    } else {
      identifiers.push(data.value.targetId);
    }

    const modifiedChat: Chat = await this.chatService.editChat(data.modifyId, {
      [field]: identifiers,
    });

    for (const targetChat of modifiedChat.targets) {
      this.emit(targetChat.userId, event, data);
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
}
