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

@Controller('chats')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  getAll() {
    return this.chatService.getAllChats();
  }

  @Get(':id')
  getById(@Param('id') chatId: string) {
    return this.chatService.getChatById(chatId);
  }

  @Post()
  createChat(@Body() dto: CreateChatDto) {
    return this.chatService.createChat(dto);
  }

  @Patch(':id')
  updateChat(@Param('id') chatId: string, @Body() dto: CreateChatDto) {
    return this.chatService.editChat(chatId, dto);
  }

  @Delete(':id')
  deleteChat(@Param('id') chatId: string) {
    return this.chatService.deleteChat(chatId);
  }
}
