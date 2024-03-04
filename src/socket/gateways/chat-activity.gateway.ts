import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities';
import { ChatActivityService } from '@/rest/chat-activity/chat-activity.service';
import { GatewayMessage } from '@/socket/entities/gateway';
import { Chat, ChatActivity, ChatActivityType } from '@/@generated-types';
import { ChatService } from '@/rest/chat/chat.service';
import {
  CreateChatActivityDto,
  EditChatActivityDto,
} from '@/rest/chat-activity';
import { MessageUpdate } from '@/socket/entities/chat-activity/event-entities/message/message-update.entity';
import { MessageDelete } from '@/socket/entities/chat-activity/event-entities/message/message-delete.entity';
import { MessageSend } from '@/socket/entities/chat-activity/event-entities/message/message-send.entity';

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

    const chat: Chat = await this.chatService.getChatById(
      createdChatActivity.chatId,
    );

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_CREATE', {
        data,
      });
    }

    return data;
  }

  @SubscribeMessage('MESSAGE_SEND')
  async handleMessageSend(
    @MessageBody() body: GatewayMessage<MessageSend>,
  ): Promise<GatewayMessage<MessageSend> | Error> {
    const data: GatewayMessage<MessageSend> | Error = await this.validateData<
      GatewayMessage<MessageSend>
    >(body, GatewayMessage<MessageSend>);
    if (data instanceof Error) return data;

    await this.handleChatActivityCreate<MessageSend>({
      sender: data.sender,
      value: {
        ...data.value,
        chat: data.value.chatId,
        type: ChatActivityType.MESSAGE_SEND,
        executor: data.sender,
        activityContent: {
          chatId: data.value.chatId,
          content: data.value.content,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('MESSAGE_UPDATE')
  async handleMessageUpdate(
    @MessageBody() body: GatewayMessage<MessageUpdate>,
  ): Promise<GatewayMessage<MessageUpdate> | Error> {
    const data: GatewayMessage<MessageUpdate> | Error = await this.validateData<
      GatewayMessage<MessageUpdate>
    >(body, GatewayMessage<MessageUpdate>);
    if (data instanceof Error) return data;

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.chatId, {
        activityContent: {
          content: data.value.content,
        },
      });

    await this.handleChatActivityCreate<MessageUpdate>({
      sender: data.sender,
      value: {
        ...data.value,
        chat: modifiedChatActivity.chatId,
        executor: data.sender,
        type: ChatActivityType.MESSAGE_EDIT,
        activityContent: {
          chatId: modifiedChatActivity.chatId,
          content: data.value.content,
        },
      },
    });

    return data;
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
      await this.chatActivityService.deleteChatActivity(data.value.deletedId);

    await this.handleChatActivityCreate<MessageDelete>({
      sender: data.sender,
      value: {
        chat: deletedChatActivity.chatId,
        type: ChatActivityType.MESSAGE_DELETE,
        executor: data.sender,
        activityContent: {
          deletedId: deletedChatActivity.id,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('MESSAGE_ANSWER')
  async handleMessageAnswer(
    @MessageBody() body: GatewayMessage<EditChatActivityDto<never>>,
  ): Promise<GatewayMessage<EditChatActivityDto<never>> | Error> {
    return body;
  }
}
