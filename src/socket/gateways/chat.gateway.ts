import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Chat, User, UserChat } from '@/@generated-types';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
} from '../entities/chat/';
import { GatewayMessage } from '../entities/gateway-message.entity';
import { Typing } from '../entities/chat/typing.entity';
import { ChatService } from '@/rest/chat/services/chat.service';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { ChatNameChange } from '@/socket/entities/chat-activity/chat/chat-name-change.entity';
import { ChatAvatarChange } from '@/socket/entities/chat-activity/chat/chat-avatar-change.entity';
import { CreateChatActivityService } from '@/socket/gateways/services/create-chat-activity.service';
import { ChatTargetService } from '@/socket/gateways/services/chat/chat-target.service';
import { ChatTargetResult } from '@/socket/gateways/services/chat/entities/chat-target-result.entity';
import { ChatCourseResult } from '@/socket/gateways/services/chat/entities/chat-course-result.entity';
import { ChatCourseService } from '@/socket/gateways/services/chat/chat-course.service';
import { ChatClubResult } from '@/socket/gateways/services/chat/entities/chat-club-result.entity';
import { ChatClubService } from '@/socket/gateways/services/chat/chat-club.service';
import { GatewayResponse } from '@/socket/entities/gateway-response.entity';
import response_codes from '@/response-codes.json';

@WebSocketGateway(SOCKET_PORT)
export class ChatGateway extends Gateway {
  constructor(
    private readonly chatService: ChatService,
    private readonly createChatActivityService: CreateChatActivityService,
    private readonly chatTargetService: ChatTargetService,
    private readonly chatCourseService: ChatCourseService,
    private readonly chatClubService: ChatClubService,
  ) {
    super();
  }

  @SubscribeMessage('CHAT_TARGET_ADD')
  async handleChatTargetAdd(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatTargetResult =
      await this.chatTargetService.executeChatUserAdd(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.target.add.failed,
        result,
      );
    const { data, modifiedChat, target } = result;

    await this.createChatActivityService.sendActivityChatTargetAdd(
      data,
      modifiedChat,
      target,
    );

    this.emitToList(
      modifiedChat.targets.map((targetChat: UserChat) => targetChat.userId),
      'RECEIVED_CHAT_TARGET_ADD',
      modifiedChat,
    );

    return new GatewayResponse(false, response_codes.chat.target.add.success);
  }

  @SubscribeMessage('CHAT_TARGET_REMOVE')
  async handleChatTargetRemove(
    @MessageBody() body: GatewayMessage<ChatTargetMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatTargetResult =
      await this.chatTargetService.executeChatUserRemove(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.target.remove.failed,
        result,
      );
    const { data, modifiedChat, target } = result;

    await this.createChatActivityService.sendActivityChatTargetRemove(
      data,
      modifiedChat,
      target,
    );

    this.emitToList(
      modifiedChat.targets.map((targetChat: UserChat) => targetChat.userId),
      'RECEIVED_CHAT_TARGET_REMOVE',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.target.remove.success,
    );
  }

  @SubscribeMessage('CHAT_COURSE_ADD')
  async handleChatCourseAdd(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatCourseResult =
      await this.chatCourseService.executeChatCourseAdd(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.course_action.add.failed,
        result,
      );
    const { data, modifiedChat, course } = result;

    await this.createChatActivityService.sendActivityChatCourseAdd(
      data,
      modifiedChat,
      course,
    );

    this.emitToList(
      course.members.map((member: User) => member.id),
      'RECEIVED_CHAT_COURSE_ADD',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.course_action.add.success,
    );
  }

  @SubscribeMessage('CHAT_COURSE_REMOVE')
  async handleChatCourseRemove(
    @MessageBody() body: GatewayMessage<ChatCourseMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatCourseResult =
      await this.chatCourseService.executeChatCourseRemove(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.course_action.remove.failed,
        result,
      );
    const { data, modifiedChat, course } = result;

    await this.createChatActivityService.sendActivityChatCourseRemove(
      data,
      modifiedChat,
      course,
    );

    this.emitToList(
      course.members.map((member: User) => member.id),
      'RECEIVED_CHAT_COURSE_REMOVE',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.course_action.remove.success,
    );
  }

  @SubscribeMessage('CHAT_CLUB_ADD')
  async handleChatClubAdd(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatClubResult =
      await this.chatClubService.executeChatClubAdd(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.club_action.add.failed,
        result,
      );
    const { data, modifiedChat, club } = result;

    await this.createChatActivityService.sendActivityChatClubAdd(
      data,
      modifiedChat,
      club,
    );

    this.emitToList(
      club.members.map((member: User) => member.id),
      'RECEIVED_CHAT_CLUB_ADD',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.club_action.add.success,
    );
  }

  @SubscribeMessage('CHAT_CLUB_REMOVE')
  async handleChatClubRemove(
    @MessageBody() body: GatewayMessage<ChatClubMutation>,
  ): Promise<GatewayResponse> {
    const result: Error | ChatClubResult =
      await this.chatClubService.chatClubRemove(body);

    if (result instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.club_action.remove.failed,
        result,
      );
    const { data, modifiedChat, club } = result;

    await this.createChatActivityService.sendActivityChatClubRemove(
      data,
      modifiedChat,
      club,
    );

    this.emitToList(
      club.members.map((member: User) => member.id),
      'RECEIVED_CHAT_CLUB_REMOVE',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.club_action.remove.success,
    );
  }

  @SubscribeMessage('CHAT_NAME_CHANGE')
  async handleChatNameChange(
    @MessageBody() body: GatewayMessage<ChatNameChange>,
  ): Promise<GatewayResponse> {
    const data: Error | GatewayMessage<ChatNameChange> =
      await this.validateData<GatewayMessage<ChatNameChange>>(
        body,
        GatewayMessage<ChatNameChange>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.name.change.failed,
        data,
      );

    const modifiedChat: Chat = await this.chatService.editChat(
      data.value.chatId,
      {
        name: data.value.name,
      },
    );

    await this.createChatActivityService.sendActivityChatNameChange(
      data,
      modifiedChat,
    );

    this.emitToList(
      modifiedChat.targets.map((targetChat: UserChat) => targetChat.userId),
      'RECEIVED_CHAT_NAME_CHANGE',
      modifiedChat,
    );

    return new GatewayResponse(false, response_codes.chat.name.change.success);
  }

  @SubscribeMessage('CHAT_AVATAR_CHANGE')
  async handleAvatarNameChange(
    @MessageBody() body: GatewayMessage<ChatAvatarChange>,
  ): Promise<GatewayResponse> {
    const data: Error | GatewayMessage<ChatAvatarChange> =
      await this.validateData<GatewayMessage<ChatAvatarChange>>(
        body,
        GatewayMessage<ChatAvatarChange>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.chat.avatar.change.failed,
        data,
      );

    const modifiedChat: Chat = await this.chatService.editChat(
      data.value.chatId,
      {
        avatar: data.value.avatar,
      },
    );

    await this.createChatActivityService.sendChatAvatarChange(
      data,
      modifiedChat,
    );

    this.emitToList(
      modifiedChat.targets.map((targetChat: UserChat) => targetChat.userId),
      'RECEIVED_CHAT_AVATAR_CHANGE',
      modifiedChat,
    );

    return new GatewayResponse(
      false,
      response_codes.chat.avatar.change.success,
    );
  }

  @SubscribeMessage('TYPING')
  async handleTyping(
    @MessageBody() body: GatewayMessage<Typing>,
  ): Promise<GatewayResponse> {
    const data: Error | GatewayMessage<Typing> = await this.validateData<
      GatewayMessage<Typing>
    >(body, GatewayMessage<Typing>);
    if (data instanceof Error)
      return new GatewayResponse(true, response_codes.chat.typing.failed, data);

    const chat: Chat = await this.chatService.getChatById(data.value.chatId);

    this.emitToList(
      chat.targets.map((targetChat: UserChat) => targetChat.userId),
      'RECEIVED_TYPING',
      data,
    );

    return new GatewayResponse(false, response_codes.chat.typing.success);
  }
}
