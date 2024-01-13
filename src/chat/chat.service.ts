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
        clubs: dto.clubs
          ? {
              connect: dto.clubs.map((club) => ({ id: club })),
            }
          : undefined,
        courses: dto.courses
          ? {
              connect: dto.courses.map((course) => ({ id: course })),
            }
          : undefined,
        messages: dto.messages
          ? {
              connect: dto.messages.map((message) => ({ id: message })),
            }
          : undefined,
        targets: dto.targets
          ? {
              connect: dto.targets.map((target) => ({ id: target })),
            }
          : undefined,
      },
    });
  }

  async editChat(chatId: string, dto: EditChatDto): Promise<Chat> {
    return this.prisma.chat.update({
      where: { id: chatId },
      data: {
        ...dto,
        clubs: dto.clubs
          ? { connect: dto.clubs.map((club) => ({ id: club })) }
          : undefined,
        courses: dto.courses
          ? { connect: dto.courses.map((course) => ({ id: course })) }
          : undefined,
        messages: dto.messages
          ? { connect: dto.messages.map((message) => ({ id: message })) }
          : undefined,
        targets: dto.targets
          ? { connect: dto.targets.map((target) => ({ id: target })) }
          : undefined,
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
