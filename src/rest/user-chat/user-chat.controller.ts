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
import { UserChat } from '@/@generated-types';

import { CreateUserChatDto, EditUserChatDto } from './dto';
import { JwtGuard } from '@/auth/guard';
import { UserChatService } from './user-chat.service';

@UseGuards(JwtGuard)
@Controller('user-chats')
export class UserChatController {
  constructor(private userChatService: UserChatService) {}

  @Get()
  async getAllUserChats(): Promise<UserChat[]> {
    return this.userChatService.getAllUserChats();
  }

  @Get(':id')
  async getUserChatById(@Param('id') id: string): Promise<UserChat> {
    return this.userChatService.getUserChatById(id);
  }

  @Post()
  async createUserChat(@Body() dto: CreateUserChatDto): Promise<UserChat> {
    return this.userChatService.createUserChat(dto);
  }

  @Patch(':id')
  async editUserChat(
    @Param('id') id: string,
    @Body() dto: EditUserChatDto,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, dto);
  }

  @Delete(':id')
  async deleteUserChat(@Param('id') id: string): Promise<UserChat> {
    return this.userChatService.deleteUserChat(id);
  }
}
