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
      data: {
        ...this.mapDtoToData(dto),
      },
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

  private mapDtoToData(dto: CreateUserChatDto | EditUserChatDto) {
    return {
      ...dto,
      chat: this.connectSingle(dto.chat),
      hidden: dto.hidden ? dto.hidden : undefined,
      pinned: dto.pinned ? dto.pinned : undefined,
      read: dto.read ? dto.read : undefined,
      user: this.connectSingle(dto.user),
    };
  }
}
