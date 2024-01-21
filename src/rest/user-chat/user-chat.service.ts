import { Injectable } from '@nestjs/common';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';
import { userChatNesting } from './user-chat.nesting';
import { UserChat } from '../../@generated-types';
import { CreateUserChatDto } from './dto/create-user-chat.dto';
import { EditUserChatDto } from './dto/edit-user-chat.dto';

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

  async deleteUserChat(id: string): Promise<boolean> {
    const deleted = this.prisma.userChat.delete({
      where: { id },
      include: {
        ...userChatNesting,
      },
    });
    return Boolean(deleted);
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
