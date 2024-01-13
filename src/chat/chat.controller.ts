import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto';
import { Chat } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('chats')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  async getAll(): Promise<Chat[]> {
    return this.chatService.getAllChats();
  }

  @Get(':id')
  async getById(@Param('id') chatId: string): Promise<Chat> {
    return this.chatService.getChatById(chatId);
  }

  @Post()
  async createChat(@Body() dto: CreateChatDto): Promise<Chat> {
    return this.chatService.createChat(dto);
  }

  @Patch(':id')
  async updateChat(@Param('id') chatId: string, @Body() dto: CreateChatDto): Promise<Chat> {
    return this.chatService.editChat(chatId, dto);
  }

  @Delete(':id')
  async deleteChat(@Param('id') chatId: string): Promise<boolean> {
    return this.chatService.deleteChat(chatId);
  }
}
