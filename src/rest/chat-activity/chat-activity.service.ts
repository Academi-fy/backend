import { Injectable } from '@nestjs/common';
import { ChatActivity } from '../../@generated-types';

import { Service } from '../../service';
import { PrismaService } from '../../prisma/prisma.service';

import { chatActivityNesting } from './chat-activity.nesting';
import { CreateChatActivityDto, EditChatActivityDto } from './dto';

@Injectable()
export class ChatActivityService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllChatActivities(): Promise<ChatActivity[]> {
    return this.prisma.chatActivity.findMany({
      include: {
        ...chatActivityNesting,
      },
    });
  }

  async getChatActivityById(chatActivityId: string): Promise<ChatActivity> {
    return this.prisma.chatActivity.findUnique({
      where: { id: chatActivityId },
      include: {
        ...chatActivityNesting,
      },
    });
  }

  async getChatActivityByChatId(chatId: string): Promise<ChatActivity[]> {
    return this.prisma.chatActivity.findMany({
      where: { chatId },
      include: {
        ...chatActivityNesting,
      },
    });
  }

  async createChatActivity(dto: CreateChatActivityDto): Promise<ChatActivity> {
    return this.prisma.chatActivity.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatActivityNesting,
      },
    });
  }

  async editChatActivity(
    chatActivityId: string,
    dto: EditChatActivityDto,
  ): Promise<ChatActivity> {
    return this.prisma.chatActivity.update({
      where: { id: chatActivityId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatActivityNesting,
      },
    });
  }

  async deleteChatActivity(chatActivityId: string): Promise<ChatActivity> {
    return this.prisma.chatActivity.delete({
      where: { id: chatActivityId },
      include: {
        ...chatActivityNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateChatActivityDto | EditChatActivityDto) {
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
