import { Service } from '@/service';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ChatTargetMutation } from '@/socket/entities/chat';
import { Chat, User, UserChat } from '@/@generated-types';
import { UserChatService } from '@/rest/user-chat/user-chat.service';
import { ChatService } from '@/rest/chat/chat.service';
import { UserService } from '@/rest/user/user.service';
import { ChatTargetResult } from '@/socket/gateways/services/chat/entities/chat-target-result.entity';

export class ChatTargetService extends Service {
  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService,
    private readonly userChatService: UserChatService,
  ) {
    super();
  }

  async executeChatCourseAdd(
    body: GatewayMessage<ChatTargetMutation>,
  ): Promise<Error | ChatTargetResult> {
    const data: Error | GatewayMessage<ChatTargetMutation> =
      await this.validateData<GatewayMessage<ChatTargetMutation>>(
        body,
        GatewayMessage<ChatTargetMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    const addedTargetChat: UserChat = await this.userChatService.createUserChat(
      {
        chat: chat.id,
        user: data.value.targetId,
      },
    );

    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .concat(addedTargetChat.id),
    });

    return { data, modifiedChat, target };
  }

  async executeChatCourseRemove(
    body: GatewayMessage<ChatTargetMutation>,
  ): Promise<Error | ChatTargetResult> {
    const data: Error | GatewayMessage<ChatTargetMutation> =
      await this.validateData<GatewayMessage<ChatTargetMutation>>(
        body,
        GatewayMessage<ChatTargetMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const target: User = await this.userService.getUserById(
      data.value.targetId,
    );

    const removedTargetChat: UserChat =
      await this.userChatService.deleteUserChatByCredentials(
        data.value.targetId,
        chat.id,
      );

    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      targets: chat.targets
        .map((targetChat: UserChat) => targetChat.userId)
        .filter(
          (targetChatId: string) => targetChatId !== removedTargetChat.id,
        ),
    });

    return { data, modifiedChat, target };
  }
}
