import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChatActivity } from '@/@generated-types';

import { CreateChatActivityDto, EditChatActivityDto } from './dto';
import { ChatActivityService } from '@/rest/chat-activity/services/chat-activity.service';

@Controller('chat-activity')
export class ChatActivityController {
  constructor(private chatActivityService: ChatActivityService) {}

  @Get()
  async getAllChatActivities(): Promise<ChatActivity[]> {
    return this.chatActivityService.getAllChatActivities();
  }

  @Get(':id')
  async getChatActivityById(
    @Param('id') chatActivityId: string,
  ): Promise<ChatActivity> {
    return this.chatActivityService.getChatActivityById(chatActivityId);
  }

  @Get('/chat/:chatId')
  getChatActivitiesByChatId(
    @Param('chatId') chatId: string,
  ): Promise<ChatActivity[]> {
    return this.chatActivityService.getChatActivitiesByChatId(chatId);
  }

  @Post()
  async createChatActivity(
    @Body() dto: CreateChatActivityDto<any>,
  ): Promise<ChatActivity> {
    return this.chatActivityService.processCreateChatActivity(dto);
  }

  @Patch(':id')
  async updateChatActivity(
    @Param('id') chatActivityId: string,
    @Body() dto: EditChatActivityDto<any>,
  ): Promise<ChatActivity> {
    return this.chatActivityService.editChatActivity(chatActivityId, dto);
  }

  @Delete(':id')
  async deleteChatActivity(
    @Param('id') chatActivityId: string,
  ): Promise<ChatActivity> {
    return this.chatActivityService.deleteChatActivity(chatActivityId);
  }
}
