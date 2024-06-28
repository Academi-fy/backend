import { PrismaService } from '@/prisma/prisma.service';
import { Chat } from '@/@generated-types';
import { chatNesting, CreateChatDto, EditChatDto } from '@/rest/chat';
import { Service } from '@/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatDatabaseService extends Service {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  /**
   * @description Get all chats from the database.
   * */
  async getAllChats(): Promise<Chat[]> {
    const chats: Chat[] = await this.prisma.chat.findMany({
      include: {
        ...chatNesting,
      },
    });

    if (!chats) throw new Error('No chats found');
    return chats;
  }

  /**
   * @description Get a chat by its id from the database.
   * */
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

  /**
   * @description Create a chat in the database.
   * */
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

  /**
   * @description Edit a chat in the database.
   * */
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

  /**
   * @description Delete a chat in the database.
   * */
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
      chatActivities: this.connectArray(dto.chatActivities),
      clubs: this.connectArray(dto.clubs),
      courses: this.connectArray(dto.courses),
      targets: this.connectArray(dto.targets),
      name: dto.name ? dto.name : undefined,
      type: dto.type ? dto.type : undefined,
      avatar: dto.avatar ? dto.avatar : undefined,
    };
  }
}
