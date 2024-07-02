import { Injectable } from '@nestjs/common';
import { UserChat } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { userChatNesting } from './user-chat.nesting';
import { CreateUserChatDto, EditUserChatDto } from './dto';

@Injectable()
export class UserChatService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllUserChats(): Promise<UserChat[]> {
    return this.prisma.userChat.findMany({
      include: {
        ...userChatNesting,
      },
    });
  }

  async getUserChatById(id: string): Promise<UserChat> {
    return this.prisma.userChat.findUnique({
      where: { id },
      include: {
        ...userChatNesting,
      },
    });
  }

  async getUserChatsByUser(userId: string): Promise<UserChat[]> {
    return this.prisma.userChat.findMany({
      where: {
        userId,
      },
      include: {
        ...userChatNesting,
      },
    });
  }

  async getUserChatByCredentials(
    targetId: string,
    chatId: string,
  ): Promise<UserChat> {
    return this.prisma.userChat.findFirst({
      where: { userId: targetId, chatId },
      include: {
        ...userChatNesting,
      },
    });
  }

  async createUserChat(dto: CreateUserChatDto): Promise<UserChat> {
    return this.prisma.userChat.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...userChatNesting,
      },
    });
  }

  async editUserChat(id: string, dto: EditUserChatDto): Promise<UserChat> {
    return this.prisma.userChat.update({
      where: { id },
      data: this.mapDtoToData(dto),
      include: {
        ...userChatNesting,
      },
    });
  }

  async deleteUserChat(id: string): Promise<UserChat> {
    return this.prisma.userChat.delete({
      where: { id },
      include: {
        ...userChatNesting,
      },
    });
  }

  async deleteUserChatByCredentials(
    targetId: string,
    chatId: string,
  ): Promise<UserChat> {
    const chatToDelete: UserChat = await this.getUserChatByCredentials(
      targetId,
      chatId,
    );
    if (!chatToDelete) throw new Error('User chat not found');

    return this.deleteUserChat(chatToDelete.id);
  }

  private mapDtoToData(dto: CreateUserChatDto | EditUserChatDto) {
    return {
      chat: this.connectSingle(dto.chat),
      hidden: dto.hidden,
      pinned: dto.pinned,
      read: dto.read,
      user: this.connectSingle(dto.user),
    };
  }
}
