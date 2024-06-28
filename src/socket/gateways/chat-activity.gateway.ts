import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { ChatActivityService } from '@/rest/chat-activity/chat-activity.service';
import { ChatActivity, ChatActivityType } from '@/@generated-types';
import { MessageUpdate } from '@/socket/entities/chat-activity/message/message-update.entity';
import { MessageDelete } from '@/socket/entities/chat-activity/message/message-delete.entity';
import { MessageSend } from '@/socket/entities/chat-activity/message/message-send.entity';
import { ActivityStar } from '@/socket/entities/chat-activity/activity/activity-star.entity';
import { MessageAnswer } from '@/socket/entities/chat-activity/message/message-answer.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { PollSend } from '@/socket/entities/chat-activity/poll/poll-send.entity';
import { PollEdit } from '@/socket/entities/chat-activity/poll/poll-edit.entity';
import { PollVote } from '@/socket/entities/chat-activity/poll/poll-vote.entity';
import { PollUser } from '@/rest/chat-activity/entities/poll-user.entity';
import { PollOption } from '@/rest/chat-activity/entities/content-types/poll.entity';
import { PollOpenClose } from '@/socket/entities/chat-activity/poll/poll-openclose.entity';
import { PollPublishResult } from '@/socket/entities/chat-activity/poll/poll-publish-result.entity';
import { HandleChatActivityCreateService } from '@/socket/gateways/services/handle-chat-activity-create.service';
import { Response } from '@/response.entity';
import * as response_codes from '@/response-codes.json';

@WebSocketGateway(SOCKET_PORT)
export class ChatActivityGateway extends Gateway {
  constructor(
    private readonly chatActivityService: ChatActivityService,
    private readonly handleChatActivityCreateService: HandleChatActivityCreateService,
  ) {
    super();
    this.eventEmitter.on(
      'createChatActivity',
      this.handleChatActivityCreateService.handleChatActivityCreate,
    );
  }

  @SubscribeMessage('MESSAGE_SEND')
  async handleMessageSend(
    @MessageBody() body: GatewayMessage<MessageSend>,
  ): Promise<Response> {
    const data: GatewayMessage<MessageSend> | Error = await this.validateData<
      GatewayMessage<MessageSend>
    >(body, GatewayMessage<MessageSend>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.message_action.send.failed,
        data,
      );

    await this.handleChatActivityCreateService.handleChatActivityCreate<MessageSend>(
      {
        sender: data.sender,
        value: {
          chat: data.value.chatId,
          type: ChatActivityType.MESSAGE_SEND,
          executor: data.sender,
          activityContent: {
            chatId: data.value.chatId,
            content: data.value.content,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.message_action.send.success,
    );
  }

  @SubscribeMessage('MESSAGE_UPDATE')
  async handleMessageUpdate(
    @MessageBody() body: GatewayMessage<MessageUpdate>,
  ): Promise<Response> {
    const data: GatewayMessage<MessageUpdate> | Error = await this.validateData<
      GatewayMessage<MessageUpdate>
    >(body, GatewayMessage<MessageUpdate>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.message_action.update.failed,
        data,
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          content: data.value.content,
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<MessageUpdate>(
      {
        sender: data.sender,
        value: {
          ...data.value,
          chat: modifiedChatActivity.chatId,
          executor: data.sender,
          type: ChatActivityType.MESSAGE_EDIT,
          activityContent: {
            activityId: modifiedChatActivity.id,
            content: data.value.content,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.message_action.update.success,
    );
  }

  @SubscribeMessage('MESSAGE_DELETE')
  async handleMessageDelete(
    @MessageBody() body: GatewayMessage<MessageDelete>,
  ): Promise<Response> {
    const data: GatewayMessage<MessageDelete> | Error = await this.validateData<
      GatewayMessage<MessageDelete>
    >(body, GatewayMessage<MessageDelete>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.message_action.delete.failed,
        data,
      );

    const deletedChatActivity: ChatActivity =
      await this.chatActivityService.deleteChatActivity(data.value.deletedId);

    await this.handleChatActivityCreateService.handleChatActivityCreate<MessageDelete>(
      {
        sender: data.sender,
        value: {
          chat: deletedChatActivity.chatId,
          type: ChatActivityType.MESSAGE_DELETE,
          executor: data.sender,
          activityContent: {
            deletedId: deletedChatActivity.id,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.message_action.delete.success,
    );
  }

  @SubscribeMessage('MESSAGE_ANSWER')
  async handleMessageAnswer(
    @MessageBody() body: GatewayMessage<MessageAnswer>,
  ): Promise<Response> {
    const data: GatewayMessage<MessageAnswer> | Error = await this.validateData<
      GatewayMessage<MessageAnswer>
    >(body, GatewayMessage<MessageAnswer>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.message_action.answer.failed,
        data,
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.answeredId, {
        activityContent: {
          answeredId: data.value.answeredId,
          content: data.value.content,
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<MessageAnswer>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: ChatActivityType.MESSAGE_ANSWER,
          executor: data.sender,
          activityContent: {
            answeredId: data.value.answeredId,
            chatId: data.value.chatId,
            content: data.value.content,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.message_action.answer.success,
    );
  }

  @SubscribeMessage('ACTIVITY_STAR')
  @SubscribeMessage('ACTIVITY_UNSTAR')
  async handleActivityStar(
    @MessageBody() body: GatewayMessage<ActivityStar>,
  ): Promise<Response> {
    const data: GatewayMessage<ActivityStar> | Error = await this.validateData<
      GatewayMessage<ActivityStar>
    >(body, GatewayMessage<ActivityStar>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.message_action.star.failed,
        data,
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        starred: data.value.starred,
      });

    const starred: boolean = data.value.starred;

    await this.handleChatActivityCreateService.handleChatActivityCreate<ActivityStar>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: starred
            ? ChatActivityType.ACTIVITY_STAR
            : ChatActivityType.ACTIVITY_UNSTAR,
          executor: data.sender,
          activityContent: {
            activityId: data.value.activityId,
            starred: starred,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.message_action.star.success,
    );
  }

  @SubscribeMessage('POLL_SEND')
  async handlePollSend(
    @MessageBody() body: GatewayMessage<PollSend>,
  ): Promise<Response> {
    const data: GatewayMessage<PollSend> | Error = await this.validateData<
      GatewayMessage<PollSend>
    >(body, GatewayMessage<PollSend>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.poll_action.send.failed,
        data,
      );

    await this.handleChatActivityCreateService.handleChatActivityCreate<PollSend>(
      {
        sender: data.sender,
        value: {
          chat: data.value.chatId,
          type: ChatActivityType.POLL_SEND,
          executor: data.value.creator,
          activityContent: {
            poll: data.value.poll,
            chatId: data.value.chatId,
            creator: data.value.creator,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.poll_action.send.success,
    );
  }

  @SubscribeMessage('POLL_EDIT')
  async handlePollEdit(
    @MessageBody() body: GatewayMessage<PollEdit>,
  ): Promise<Response> {
    const data: GatewayMessage<PollEdit> | Error = await this.validateData<
      GatewayMessage<PollEdit>
    >(body, GatewayMessage<PollEdit>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.poll_action.edit.failed,
        data,
      );

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Response(
        true,
        response_codes.chat_activity.poll_action.wrong_type,
        new Error(`ChatActivity '${pollActivity.id}' is not a Poll`),
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          poll: data.value.poll,
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<PollEdit>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: ChatActivityType.POLL_EDIT,
          executor: data.sender,
          activityContent: {
            activityId: data.value.activityId,
            poll: data.value.poll,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.poll_action.edit.success,
    );
  }

  @SubscribeMessage('POLL_VOTE')
  @SubscribeMessage('POLL_UNVOTE')
  async handlePollVote(
    @MessageBody() body: GatewayMessage<PollVote>,
  ): Promise<Response> {
    const data: GatewayMessage<PollVote> | Error = await this.validateData<
      GatewayMessage<PollVote>
    >(body, GatewayMessage<PollVote>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.poll_action.vote.failed,
        data,
      );

    const voted: boolean = data.value.voteDeleted;

    const chatActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(chatActivity))
      return new Response(
        true,
        response_codes.chat_activity.poll_action.wrong_type,
        new Error(`ChatActivity '${chatActivity.id}' is not a Poll`),
      );

    const updatedOptions = chatActivity.activityContent.poll.options.map(
      (option: PollOption) => {
        if (option.id === data.value.optionId) {
          option.votedBy = option.votedBy.filter(
            (user: PollUser) => user.userId !== data.value.userId,
          );
          option.votes = option.votedBy.length;
        }
        return option;
      },
    );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          poll: {
            options: updatedOptions,
          },
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<PollVote>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: voted
            ? ChatActivityType.POLL_VOTE
            : ChatActivityType.POLL_UNVOTE,
          executor: data.sender,
          activityContent: {
            activityId: data.value.activityId,
            voteDeleted: data.value.voteDeleted,
            optionId: data.value.optionId,
            userId: data.value.userId,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.poll_action.vote.success,
    );
  }

  @SubscribeMessage('POLL_REOPEN')
  @SubscribeMessage('POLL_CLOSE')
  async handlePollClose(
    @MessageBody() body: GatewayMessage<PollOpenClose>,
  ): Promise<Response> {
    const data: GatewayMessage<PollOpenClose> | Error = await this.validateData<
      GatewayMessage<PollOpenClose>
    >(body, GatewayMessage<PollOpenClose>);
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.poll_action.open_close.failed,
        data,
      );

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Response(
        true,
        response_codes.chat_activity.poll_action.wrong_type,
        new Error(`ChatActivity '${pollActivity.id}' is not a Poll`),
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          closed: data.value.isClosed,
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<PollOpenClose>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: data.value.isClosed
            ? ChatActivityType.POLL_CLOSE
            : ChatActivityType.POLL_REOPEN,
          executor: data.sender,
          activityContent: {
            activityId: data.value.activityId,
            isClosed: data.value.isClosed,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.poll_action.open_close.success,
    );
  }

  @SubscribeMessage('POLL_RESULT')
  async handlePollResult(
    @MessageBody() body: GatewayMessage<PollPublishResult>,
  ): Promise<Response> {
    const data: GatewayMessage<PollPublishResult> | Error =
      await this.validateData<GatewayMessage<PollPublishResult>>(
        body,
        GatewayMessage<PollPublishResult>,
      );
    if (data instanceof Error)
      return new Response(
        true,
        response_codes.chat_activity.poll_action.result.failed,
        data,
      );

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Response(
        true,
        response_codes.chat_activity.poll_action.wrong_type,
        new Error(`ChatActivity '${pollActivity.id}' is not a Poll`),
      );

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          result_published: data.value.result_published,
        },
      });

    await this.handleChatActivityCreateService.handleChatActivityCreate<PollPublishResult>(
      {
        sender: data.sender,
        value: {
          chat: modifiedChatActivity.chatId,
          type: ChatActivityType.POLL_RESULT,
          executor: data.sender,
          activityContent: {
            activityId: data.value.activityId,
            result_published: data.value.result_published,
          },
        },
      },
    );

    return new Response(
      false,
      response_codes.chat_activity.poll_action.result.success,
    );
  }

  private isPoll(activity: ChatActivity): boolean {
    return activity.type != ChatActivityType.POLL_SEND;
  }
}
