import { Injectable } from '@nestjs/common';
import { CreateChatDto, EditChatDto } from './dto';
import { Service } from '../../service';
import { chatNesting } from './';
import { PrismaService } from '../../prisma';
import { Chat } from 'src/@generated-types';

@Injectable()
export class ChatService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllChats(): Promise<Chat[]> {
    return this.prisma.chat.findMany({
      include: {
        ...chatNesting,
      },
    });
  }

  async getChatById(chatId: string): Promise<Chat> {
    return this.prisma.chat.findUnique({
      where: { id: chatId },
      include: {
        ...chatNesting,
      },
    });
  }

  async createChat(dto: CreateChatDto): Promise<Chat> {
    return this.prisma.chat.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatNesting,
      },
    });
  }

  async editChat(chatId: string, dto: EditChatDto): Promise<Chat> {
    return this.prisma.chat.update({
      where: { id: chatId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...chatNesting,
      },
    });
  }

  async deleteChat(chatId: string): Promise<Chat> {
    return this.prisma.chat.delete({
      where: { id: chatId },
      include: {
        ...chatNesting,
      },
    });
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
