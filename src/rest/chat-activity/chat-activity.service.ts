import { Injectable } from '@nestjs/common';
import { ChatActivity } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { chatActivityNesting } from './chat-activity.nesting';
import { CreateChatActivityDto, EditChatActivityDto } from './dto';

@Injectable()
export class ChatActivityService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllChatActivities(): Promise<ChatActivity[]> {
    const chatActivities: ChatActivity[] =
      await this.prisma.chatActivity.findMany({
        include: {
          ...chatActivityNesting,
        },
      });

    if (!chatActivities) throw new Error('No chat activities found!');
    return chatActivities;
  }

  async getChatActivityById(chatActivityId: string): Promise<ChatActivity> {
    const chatActivity: ChatActivity =
      await this.prisma.chatActivity.findUnique({
        where: { id: chatActivityId },
        include: {
          ...chatActivityNesting,
        },
      });

    if (!chatActivity)
      throw new Error(`ChatActivity with id ${chatActivityId} not found`);
    return chatActivity;
  }

  async getChatActivityByChatId(chatId: string): Promise<ChatActivity[]> {
    const chatActivities: ChatActivity[] =
      await this.prisma.chatActivity.findMany({
        where: { chatId },
        include: {
          ...chatActivityNesting,
        },
      });

    if (!chatActivities)
      throw new Error(`ChatActivity with chatId ${chatId} not found`);
    return chatActivities;
  }

  async createChatActivity(
    dto: CreateChatActivityDto<any>,
  ): Promise<ChatActivity> {
    const chatActivity: ChatActivity = await this.prisma.chatActivity.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatActivityNesting,
      },
    });
    if (!chatActivity)
      throw new Error(`ChatActivity could not be created with data: ${dto}`);

    return chatActivity;
  }

  async editChatActivity(
    chatActivityId: string,
    dto: EditChatActivityDto<any>,
  ): Promise<ChatActivity> {
    const modifiedChatActivity: ChatActivity =
      await this.prisma.chatActivity.update({
        where: { id: chatActivityId },
        data: {
          ...this.mapDtoToData(dto),
        },
        include: {
          ...chatActivityNesting,
        },
      });

    if (!modifiedChatActivity)
      throw new Error(`ChatActivity could not be updated with data: ${dto}`);
    return modifiedChatActivity;
  }

  async deleteChatActivity(chatActivityId: string): Promise<ChatActivity> {
    const deletedChatActivity: ChatActivity =
      await this.prisma.chatActivity.delete({
        where: { id: chatActivityId },
        include: {
          ...chatActivityNesting,
        },
      });

    if (!deletedChatActivity)
      throw new Error(`ChatActivity with id ${chatActivityId} not found`);
    return deletedChatActivity;
  }

  private mapDtoToData(
    dto: CreateChatActivityDto<any> | EditChatActivityDto<any>,
  ) {
    return {
      ...dto,
      answeredBy: this.connectSingle(dto.answeredBy),
      answerTo: this.connectSingle(dto.answerTo),
      chat: this.connectSingle(dto.chat),
      executor: this.connectSingle(dto.executor),
      readBy: this.connectArray(dto.readBy),
      type: dto.type ? dto.type : undefined,
    };
  }
}
