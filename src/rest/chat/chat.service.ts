import { Injectable } from '@nestjs/common';
import { Chat } from 'src/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { chatNesting } from './';
import { CreateChatDto, EditChatDto } from './dto';

@Injectable()
export class ChatService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllChats(): Promise<Chat[]> {
    const chats: Chat[] = await this.prisma.chat.findMany({
      include: {
        ...chatNesting,
      },
    });

    if (!chats) throw new Error('No chats found');
    return chats;
  }

  async getChatById(chatId: string): Promise<Chat> {
    const chat: Chat = await this.prisma.chat.findUnique({
      where: { id: chatId },
      include: {
        ...chatNesting,
      },
    });

    if (!chat) throw new Error(`Chat with id ${chatId} not found`);
    return chat;
  }

  async createChat(dto: CreateChatDto): Promise<Chat> {
    const createdChat: Chat = await this.prisma.chat.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatNesting,
      },
    });

    if (!createdChat)
      throw new Error(`Chat could not be created with data: ${dto}`);
    return createdChat;
  }

  async editChat(chatId: string, dto: EditChatDto): Promise<Chat> {
    const modifiedChat: Chat = await this.prisma.chat.update({
      where: { id: chatId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatNesting,
      },
    });

    if (!modifiedChat)
      throw new Error(`Chat with id ${chatId} could not be modified`);
    return modifiedChat;
  }

  async deleteChat(chatId: string): Promise<Chat> {
    const deletedChat: Chat = await this.prisma.chat.delete({
      where: { id: chatId },
      include: {
        ...chatNesting,
      },
    });

    if (!deletedChat)
      throw new Error(`Chat with id ${chatId} could not be deleted`);
    return deletedChat;
  }

  private mapDtoToData(dto: CreateChatDto | EditChatDto) {
    return {
      ...dto,
      activities: this.connectArray(dto.activities),
      clubs: this.connectArray(dto.clubs),
      courses: this.connectArray(dto.courses),
      targets: this.connectArray(dto.targets),
      name: dto.name ? dto.name : undefined,
      type: dto.type ? dto.type : undefined,
      avatar: dto.avatar ? dto.avatar : undefined,
    };
  }
}
