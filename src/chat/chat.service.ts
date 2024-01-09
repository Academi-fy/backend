import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatDto, EditChatDto } from './dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAllChats() {
    return this.prisma.chat.findMany({});
  }

  async getChatById(chatId: string) {
    return this.prisma.chat.findUnique({
      where: { id: chatId },
    });
  }

  async createChat(dto: CreateChatDto) {
    return this.prisma.chat.create({
      data: {
        ...dto,
      },
    });
  }

  async editChat(chatId: string, dto: EditChatDto) {
    return this.prisma.chat.update({
      where: { id: chatId },
      data: {
        ...dto,
      },
    });
  }

  async deleteChat(chatId: string) {
    const deletedChat = await this.prisma.chat.delete({
      where: { id: chatId },
    });
    return Boolean(deletedChat);
  }
}
