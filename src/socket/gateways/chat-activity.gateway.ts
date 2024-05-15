import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { ChatActivityService } from '@/rest/chat-activity/chat-activity.service';
import { Chat, ChatActivity, ChatActivityType } from '@/@generated-types';
import { ChatService } from '@/rest/chat/services/chat.service';
import { CreateChatActivityDto } from '@/rest/chat-activity';
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

console.log(Gateway);

@WebSocketGateway(SOCKET_PORT)
export class ChatActivityGateway extends Gateway {
  constructor(
    private readonly chatActivityService: ChatActivityService,
    private readonly chatService: ChatService,
  ) {
    super();
    this.eventEmitter.on('createChatActivity', this.handleChatActivityCreate); //TODO: check if works
  }

  /**
   * Handles the creation of a chat activity.
   * `RECEIVED_CHAT_ACTIVITY_CREATE` event is
   * emitted to all chat members.
   * */
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
      await this.chatActivityService.processCreateChatActivity(data.value);

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

    await this.createChatActivity<MessageSend>({
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
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          content: data.value.content,
        },
      });

    await this.createChatActivity<MessageUpdate>({
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

    await this.createChatActivity<MessageDelete>({
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
    @MessageBody() body: GatewayMessage<MessageAnswer>,
  ): Promise<GatewayMessage<MessageAnswer> | Error> {
    const data: GatewayMessage<MessageAnswer> | Error = await this.validateData<
      GatewayMessage<MessageAnswer>
    >(body, GatewayMessage<MessageAnswer>);
    if (data instanceof Error) return data;

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.answeredId, {
        activityContent: {
          answeredId: data.value.answeredId,
          content: data.value.content,
        },
      });

    await this.createChatActivity<MessageAnswer>({
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
    });

    return data;
  }

  @SubscribeMessage('ACTIVITY_STAR')
  @SubscribeMessage('ACTIVITY_UNSTAR')
  async handleActivityStar(
    @MessageBody() body: GatewayMessage<ActivityStar>,
  ): Promise<GatewayMessage<ActivityStar> | Error> {
    const data: GatewayMessage<ActivityStar> | Error = await this.validateData<
      GatewayMessage<ActivityStar>
    >(body, GatewayMessage<ActivityStar>);
    if (data instanceof Error) return data;

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          starredId: data.value.activityId,
        },
      });

    const starred: boolean = data.value.starred;

    await this.createChatActivity<ActivityStar>({
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
    });

    return data;
  }

  @SubscribeMessage('POLL_SEND')
  async handlePollSend(
    @MessageBody() body: GatewayMessage<PollSend>,
  ): Promise<GatewayMessage<PollSend> | Error> {
    const data: GatewayMessage<PollSend> | Error = await this.validateData<
      GatewayMessage<PollSend>
    >(body, GatewayMessage<PollSend>);
    if (data instanceof Error) return data;

    await this.createChatActivity<PollSend>({
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
    });

    return data;
  }

  @SubscribeMessage('POLL_EDIT')
  async handlePollEdit(
    @MessageBody() body: GatewayMessage<PollEdit>,
  ): Promise<GatewayMessage<PollEdit> | Error> {
    const data: GatewayMessage<PollEdit> | Error = await this.validateData<
      GatewayMessage<PollEdit>
    >(body, GatewayMessage<PollEdit>);
    if (data instanceof Error) return data;

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Error(`ChatActivity '${pollActivity.id}' is not a Poll`);

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          poll: data.value.poll,
        },
      });

    await this.createChatActivity<PollEdit>({
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
    });

    return data;
  }

  @SubscribeMessage('POLL_VOTE')
  @SubscribeMessage('POLL_UNVOTE')
  async handlePollVote(
    @MessageBody() body: GatewayMessage<PollVote>,
  ): Promise<GatewayMessage<PollVote> | Error> {
    const data: GatewayMessage<PollVote> | Error = await this.validateData<
      GatewayMessage<PollVote>
    >(body, GatewayMessage<PollVote>);
    if (data instanceof Error) return data;

    const voted: boolean = data.value.voteDeleted;

    const chatActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(chatActivity))
      return new Error(`ChatActivity '${chatActivity.id}' is not a Poll`);

    // @ts-ignore
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

    await this.createChatActivity<PollVote>({
      sender: data.sender,
      value: {
        chat: modifiedChatActivity.chatId,
        type: voted ? ChatActivityType.POLL_VOTE : ChatActivityType.POLL_UNVOTE,
        executor: data.sender,
        activityContent: {
          activityId: data.value.activityId,
          voteDeleted: data.value.voteDeleted,
          optionId: data.value.optionId,
          userId: data.value.userId,
        },
      },
    });

    return data;
  }

  @SubscribeMessage('POLL_REOPEN')
  @SubscribeMessage('POLL_CLOSE')
  async handlePollClose(
    @MessageBody() body: GatewayMessage<PollOpenClose>,
  ): Promise<GatewayMessage<PollOpenClose> | Error> {
    const data: GatewayMessage<PollOpenClose> | Error = await this.validateData<
      GatewayMessage<PollOpenClose>
    >(body, GatewayMessage<PollOpenClose>);
    if (data instanceof Error) return data;

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Error(`ChatActivity '${pollActivity.id}' is not a Poll`);

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          closed: data.value.isClosed,
        },
      });

    await this.createChatActivity<PollOpenClose>({
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
    });

    return data;
  }

  @SubscribeMessage('POLL_RESULT')
  async handlePollResult(
    @MessageBody() body: GatewayMessage<PollPublishResult>,
  ): Promise<GatewayMessage<PollPublishResult> | Error> {
    const data: GatewayMessage<PollPublishResult> | Error =
      await this.validateData<GatewayMessage<PollPublishResult>>(
        body,
        GatewayMessage<PollPublishResult>,
      );
    if (data instanceof Error) return data;

    const pollActivity: ChatActivity =
      await this.chatActivityService.getChatActivityById(data.value.activityId);
    if (!this.isPoll(pollActivity))
      return new Error(`ChatActivity '${pollActivity.id}' is not a Poll`);

    const modifiedChatActivity: ChatActivity =
      await this.chatActivityService.editChatActivity(data.value.activityId, {
        activityContent: {
          result_published: data.value.result_published,
        },
      });

    await this.createChatActivity<PollPublishResult>({
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
    });

    return data;
  }

  private isPoll(activity: ChatActivity): boolean {
    return activity.type != ChatActivityType.POLL_SEND;
  }
}
