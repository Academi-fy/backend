import { Service } from '@/service';
import { Injectable } from '@nestjs/common';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ChatClubMutation } from '@/socket/entities/chat';
import { Chat, Club } from '@/@generated-types';
import { ChatClubResult } from '@/socket/gateways/services/chat/entities/chat-club-result.entity';
import { UserChatService } from '@/rest/user-chat/user-chat.service';
import { ClubService } from '@/rest/club/club.service';
import { ChatService } from '@/rest/chat/services/chat.service';

@Injectable()
export class ChatClubService extends Service {
  constructor(
    private readonly chatService: ChatService,
    private readonly clubService: ClubService,
    private readonly userChatService: UserChatService,
  ) {
    super();
  }

  async executeChatClubAdd(
    body: GatewayMessage<ChatClubMutation>,
  ): Promise<Error | ChatClubResult> {
    const data: Error | GatewayMessage<ChatClubMutation> =
      await this.validateData<GatewayMessage<ChatClubMutation>>(
        body,
        GatewayMessage<ChatClubMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const club: Club = await this.clubService.getClubById(data.value.clubId);

    if (chat.clubs.some((currentClub: Club) => currentClub.id === club.id))
      throw new Error('Club already exists in chat');

    for (const member of club.members) {
      await this.userChatService.createUserChat({
        chat: chat.id,
        user: member.id,
      });
    }

    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      clubs: chat.clubs.map((club: Club) => club.id).concat(data.value.clubId),
    });

    return { data, modifiedChat, club };
  }

  async chatClubRemove(
    body: GatewayMessage<ChatClubMutation>,
  ): Promise<Error | ChatClubResult> {
    const data: Error | GatewayMessage<ChatClubMutation> =
      await this.validateData<GatewayMessage<ChatClubMutation>>(
        body,
        GatewayMessage<ChatClubMutation>,
      );
    if (data instanceof Error) return data;

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);
    const club: Club = await this.clubService.getClubById(data.value.clubId);

    if (!chat.clubs.some((currentClub: Club) => currentClub.id === club.id))
      throw new Error('Club does not exist in chat');

    for (const member of club.members) {
      await this.userChatService.deleteUserChatByCredentials(
        member.id,
        chat.id,
      );
    }
    const modifiedChat: Chat = await this.chatService.editChat(chat.id, {
      targets: chat.clubs
        .map((currentClub: Club) => currentClub.id)
        .filter((currentClubId: string) => currentClubId !== club.id),
    });

    return { data, modifiedChat, club };
  }
}
