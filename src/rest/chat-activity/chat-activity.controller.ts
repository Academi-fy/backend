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
import { ChatActivity } from '@/@generated-types';

import { CreateChatActivityDto, EditChatActivityDto } from './dto';
import { JwtGuard } from '@/auth/guard';
import { ChatActivityService } from './chat-activity.service';

@UseGuards(JwtGuard)
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
