import { Injectable } from '@nestjs/common';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { CreateChatActivityDto } from '@/rest/chat-activity';
import { Chat, ChatActivity } from '@/@generated-types';
import { ChatActivityService } from '@/rest/chat-activity/chat-activity.service';
import { ChatService } from '@/rest/chat/services/chat.service';
import { Gateway } from '@/socket/entities/gateway.entity';

@Injectable()
export class HandleChatActivityCreateService extends Gateway {
  constructor(
    private chatActivityService: ChatActivityService,
    private chatService: ChatService,
  ) {
    super();
  }

  /**
   * Handles the creation of a chat activity.
   * `RECEIVED_CHAT_ACTIVITY_CREATE` event is
   * emitted to all chat members.
   * */
  async handleChatActivityCreate<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<GatewayMessage<CreateChatActivityDto<T>> | Error> {
    const createdChatActivity: ChatActivity =
      await this.chatActivityService.processCreateChatActivity(body.value);

    const chat: Chat = await this.chatService.getChatById(
      createdChatActivity.chatId,
    );

    for (const member of chat.targets) {
      this.emit(member.userId, 'RECEIVED_CHAT_ACTIVITY_CREATE', {
        createdChatActivity,
      });
    }

    return body;
  }
}
