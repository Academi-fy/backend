import { Service } from '@/service';
import { Injectable } from '@nestjs/common';
import {
  ActivityChatAddAction,
  ActivityChatRemoveAction,
} from '@/socket/entities/chat-activity/chat/activity-chat-actions.entity';
import {
  ActivityChatTargetAdd,
  ActivityChatTargetRemove,
} from '@/socket/entities/chat-activity/chat/chat-target-actions.entity';
import { Chat, ChatActivityType, Club, Course, User } from '@/@generated-types';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import {
  ChatClubMutation,
  ChatCourseMutation,
  ChatTargetMutation,
} from '@/socket/entities/chat';
import {
  ActivityChatCourseAdd,
  ActivityChatCourseRemove,
} from '@/socket/entities/chat-activity/chat/chat-course-actions.entity';
import { ChatNameChange } from '@/socket/entities/chat-activity/chat/chat-name-change.entity';
import { ActivityChatClubMutation } from '@/socket/entities/chat-activity/chat/chat-club-actions.entity';
import { ChatAvatarChange } from '@/socket/entities/chat-activity/chat/chat-avatar-change.entity';

@Injectable()
export class CreateChatActivityService extends Service {
  async sendActivityChatTargetAdd(
    data: GatewayMessage<ChatTargetMutation>,
    chat: Chat,
    target: User,
  ): Promise<void> {
    await this.createChatActivity<ActivityChatAddAction<ActivityChatTargetAdd>>(
      {
        sender: data.sender,
        value: {
          chat: chat.id,
          type: ChatActivityType.CHAT_TARGET_ADD,
          executor: data.sender,
          activityContent: {
            chatName: chat.name,
            added: {
              chatId: chat.id,
              targetId: target.id,
              firstName: target.firstName,
              lastName: target.lastName,
              avatar: target.avatar,
            },
            addedId: data.value.targetId,
          },
        },
      },
    );
  }

  async sendActivityChatTargetRemove(
    data: GatewayMessage<ChatTargetMutation>,
    chat: Chat,
    target: User,
  ): Promise<void> {
    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatTargetRemove>
    >({
      sender: data.sender,
      value: {
        chat: chat.id,
        type: ChatActivityType.CHAT_TARGET_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: chat.name,
          removed: {
            chatId: chat.id,
            targetId: target.id,
            firstName: target.firstName,
            lastName: target.lastName,
            avatar: target.avatar,
          },
          removedId: data.value.targetId,
        },
      },
    });
  }

  async sendActivityChatCourseAdd(
    data: GatewayMessage<ChatCourseMutation>,
    chat: Chat,
    course: Course,
  ): Promise<void> {
    await this.createChatActivity<ActivityChatAddAction<ActivityChatCourseAdd>>(
      {
        sender: data.sender,
        value: {
          chat: chat.id,
          type: ChatActivityType.CHAT_COURSE_ADD,
          executor: data.sender,
          activityContent: {
            chatName: chat.name,
            added: {
              chatId: chat.id,
              courseId: course.id,
              courseName: course.name,
            },
            addedId: data.value.courseId,
          },
        },
      },
    );
  }

  async sendActivityChatCourseRemove(
    data: GatewayMessage<ChatCourseMutation>,
    chat: Chat,
    course: Course,
  ): Promise<void> {
    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatCourseRemove>
    >({
      sender: data.sender,
      value: {
        chat: chat.id,
        type: ChatActivityType.CHAT_COURSE_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: chat.name,
          removed: {
            chatId: chat.id,
            courseId: course.id,
            courseName: course.name,
          },
          removedId: data.value.courseId,
        },
      },
    });
  }

  async sendActivityChatClubAdd(
    data: GatewayMessage<ChatClubMutation>,
    chat: Chat,
    club: Club,
  ): Promise<void> {
    await this.createChatActivity<ActivityChatAddAction<ChatClubMutation>>({
      sender: data.sender,
      value: {
        chat: chat.id,
        type: ChatActivityType.CHAT_CLUB_ADD,
        executor: data.sender,
        activityContent: {
          chatName: chat.name,
          added: {
            chatId: chat.id,
            clubId: club.id,
            clubName: club.name,
          },
          addedId: data.value.clubId,
        },
      },
    });
  }

  async sendActivityChatClubRemove(
    data: GatewayMessage<ChatClubMutation>,
    chat: Chat,
    club: Club,
  ): Promise<void> {
    await this.createChatActivity<
      ActivityChatRemoveAction<ActivityChatClubMutation>
    >({
      sender: data.sender,
      value: {
        chat: data.value.chatId,
        type: ChatActivityType.CHAT_CLUB_REMOVE,
        executor: data.sender,
        activityContent: {
          chatName: chat.name,
          removed: {
            name: club.name,
            avatar: club.avatar,
          },
          removedId: data.value.clubId,
        },
      },
    });
  }

  async sendActivityChatNameChange(
    data: GatewayMessage<ChatNameChange>,
    chat: Chat,
  ): Promise<void> {
    await this.createChatActivity<ChatNameChange>({
      sender: data.sender,
      value: {
        chat: chat.id,
        type: ChatActivityType.CHAT_NAME_CHANGE,
        executor: data.sender,
        activityContent: {
          chatId: chat.id,
          name: chat.name,
          oldName: chat.name,
        },
      },
    });
  }

  async sendChatAvatarChange(
    data: GatewayMessage<ChatAvatarChange>,
    chat: Chat,
  ): Promise<void> {
    await this.createChatActivity<ChatAvatarChange>({
      sender: data.sender,
      value: {
        chat: chat.id,
        type: ChatActivityType.CHAT_AVATAR_CHANGE,
        executor: data.sender,
        activityContent: {
          chatId: chat.id,
          avatar: chat.avatar,
        },
      },
    });
  }
}
