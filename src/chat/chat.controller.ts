import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto';
import { Chat } from '@prisma/client';

@Controller('chats')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  getAll(): Promise<Chat[]> {
    return this.chatService.getAllChats();
  }

  @Get(':id')
  getById(@Param('id') chatId: string): Promise<Chat> {
    return this.chatService.getChatById(chatId);
  }

  @Post()
  createChat(@Body() dto: CreateChatDto): Promise<Chat> {
    return this.chatService.createChat(dto);
  }

  @Patch(':id')
  updateChat(@Param('id') chatId: string, @Body() dto: CreateChatDto): Promise<Chat> {
    return this.chatService.editChat(chatId, dto);
  }

  @Delete(':id')
  deleteChat(@Param('id') chatId: string): Promise<boolean> {
    return this.chatService.deleteChat(chatId);
  }
}
