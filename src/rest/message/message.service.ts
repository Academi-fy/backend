import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { messageNesting } from './message.nesting';
import { Message } from '../../@generated-types';
import { Service } from '../../service';
import { CreateMessageDto, EditMessageDto } from './dto';

@Injectable()
export class MessageService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllMessages(): Promise<Message[]> {
    return this.prisma.message.findMany({
      include: {
        ...messageNesting,
      },
    });
  }

  async getMessageById(id: string): Promise<Message> {
    return this.prisma.message.findUnique({
      where: { id },
      include: {
        ...messageNesting,
      },
    });
  }

  async createMessage(dto: CreateMessageDto): Promise<Message> {
    return this.prisma.message.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...messageNesting,
      },
    });
  }

  async editMessage(id: string, dto: EditMessageDto): Promise<Message> {
    return this.prisma.message.update({
      where: { id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...messageNesting,
      },
    });
  }

  async deleteMessage(id: string): Promise<Message> {
    return this.prisma.message.delete({
      where: { id },
      include: {
        ...messageNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateMessageDto | EditMessageDto) {
    return {
      ...dto,
      author: this.connectSingle(dto.author),
      chat: this.connectSingle(dto.chat),
      replies: this.connectArray(dto.replies),
      replyTo: this.connectSingle(dto.replyTo),
      content: this.stringifyArray(dto.content),
      editHistory: this.stringifyArray(dto.editHistory),
      reactions: this.stringifyArray(dto.reactions),
    };
  }
}
