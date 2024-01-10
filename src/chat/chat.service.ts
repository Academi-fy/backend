import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatDto, EditChatDto } from './dto';
import { Chat } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAllChats(): Promise<Chat[]> {
    return this.prisma.chat.findMany({});
  }

  async getChatById(chatId: string): Promise<Chat> {
    return this.prisma.chat.findUnique({
      where: { id: chatId },
    });
  }

  async createChat(dto: CreateChatDto): Promise<Chat> {
    return this.prisma.chat.create({
      data: {
        ...dto,
      },
    });
  }

  async editChat(chatId: string, dto: EditChatDto): Promise<Chat> {
    return this.prisma.chat.update({
      where: { id: chatId },
      data: {
        ...dto,
      },
    });
  }

  async deleteChat(chatId: string): Promise<boolean> {
    const deletedChat = await this.prisma.chat.delete({
      where: { id: chatId },
    });
    return Boolean(deletedChat);
  }
}
