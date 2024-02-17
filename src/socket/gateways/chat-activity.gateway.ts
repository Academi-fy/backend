import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities';
import { ChatActivityService } from '@/rest/chat-activity/chat-activity.service';
import { GatewayMessage } from '@/socket/entities/gateway';
import { Chat, ChatActivity } from '@/@generated-types';
import { ChatService } from '@/rest/chat/chat.service';
import {
  CreateChatActivityDto,
  EditChatActivityDto,
} from '@/rest/chat-activity';
import { MessageMutation } from '@/socket/entities/chat-activity/event-entities/message-mutation.entity';
import { MessageDelete } from '@/socket/entities/chat-activity/event-entities/message-delete.entity';

@WebSocketGateway(SOCKET_PORT)
export class ChatActivityGateway extends Gateway {
  constructor(
    private readonly chatActivityService: ChatActivityService,
    private readonly chatService: ChatService,
  ) {
    super();
  }

  async handleChatActivityCreate<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<GatewayMessage<CreateChatActivityDto<T>> | Error> {
    const data: GatewayMessage<CreateChatActivityDto<T>> | Error =
      await this.validateData<GatewayMessage<CreateChatActivityDto<T>>>(
        body,
        GatewayMessage<CreateChatActivityDto<T>>,
      );
    if (data instanceof Error) return data;

    const createdChatActivity: ChatActivity =
      await this.chatActivityService.createChatActivity(data.value);
    if (!createdChatActivity)
      throw new Error(`ChatActivity could not be created with data: ${data}`);

    const chat: Chat = await this.chatService.getChatById(
      createdChatActivity.chatId,
    );
    if (!chat)
      throw new Error(`Chat with id ${createdChatActivity.chatId} not found`);

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_CREATE', data);
    }

    return body;
  }

  @SubscribeMessage('MESSAGE_SEND')
  async handleMessageSend(
    @MessageBody() body: GatewayMessage<CreateChatActivityDto<MessageMutation>>,
  ): Promise<GatewayMessage<CreateChatActivityDto<MessageMutation>> | Error> {
    const data: GatewayMessage<CreateChatActivityDto<MessageMutation>> | Error =
      await this.validateData<
        GatewayMessage<CreateChatActivityDto<MessageMutation>>
      >(body, GatewayMessage<CreateChatActivityDto<MessageMutation>>);
    if (data instanceof Error) return data;

    const createdChatActivity: ChatActivity =
      await this.chatActivityService.createChatActivity(data.value);
    if (!createdChatActivity)
      throw new Error(`ChatActivity could not be created with data: ${data}`);

    const chat: Chat = await this.chatService.getChatById(
      createdChatActivity.chatId,
    );
    if (!chat)
      throw new Error(`Chat with id ${createdChatActivity.chatId} not found`);

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_SEND', data);
    }

    return body;
  }

  @SubscribeMessage('MESSAGE_UPDATE')
  async handleMessageUpdate(
    @MessageBody() body: GatewayMessage<EditChatActivityDto<MessageMutation>>,
  ): Promise<GatewayMessage<EditChatActivityDto<MessageMutation>> | Error> {
    const data: GatewayMessage<EditChatActivityDto<MessageMutation>> | Error =
      await this.validateData<
        GatewayMessage<EditChatActivityDto<MessageMutation>>
      >(body, GatewayMessage<EditChatActivityDto<MessageMutation>>);
    if (data instanceof Error) return data;

    const createdChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(
        data.modifyId,
        data.value,
      );
    if (!createdChatActivity)
      throw new Error(`ChatActivity could not be updated with data: ${data}`);

    const chat: Chat = await this.chatService.getChatById(
      createdChatActivity.chatId,
    );
    if (!chat)
      throw new Error(`Chat with id ${createdChatActivity.chatId} not found`);

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_UPDATE', data);
    }

    return body;
  }

  @SubscribeMessage('MESSAGE_DELETE')
  async handleMessageDelete(
    @MessageBody() body: GatewayMessage<MessageDelete>,
  ): Promise<GatewayMessage<MessageDelete> | Error> {
    const data: GatewayMessage<MessageDelete> | Error = await this.validateData<
      GatewayMessage<MessageDelete>
    >(body, GatewayMessage<MessageDelete>);
    if (data instanceof Error) return data;

    const deletedChatActivity: ChatActivity =
      await this.chatActivityService.deleteChatActivity(data.modifyId);
    if (!deletedChatActivity)
      throw new Error(`ChatActivity could not be deleted with data: ${data}`);

    const chat: Chat = await this.chatService.getChatById(
      deletedChatActivity.chatId,
    );
    if (!chat)
      throw new Error(`Chat with id ${deletedChatActivity.chatId} not found`);

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_DELETE', data);
    }

    return body;
  }

  @SubscribeMessage('MESSAGE_ANSWER')
  async handleMessageAnswer(
    @MessageBody() body: GatewayMessage<EditChatActivityDto<never>>,
  ): Promise<GatewayMessage<EditChatActivityDto<never>> | Error> {
    return body;
  }
}
