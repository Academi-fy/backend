import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UserChat } from '@/@generated-types';

import { EditUserChatDto } from './dto';
import { UserChatService } from './user-chat.service';

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

  @Get('/user/:id')
  async getUserChatsByUser(@Param('id') userId: string): Promise<UserChat[]> {
    return this.userChatService.getUserChatsByUser(userId);
  }

  /*@Get('/check-exists/user1=:user1&user2=:user2')
  async checkChatExists(
    @Param('user1') user1: string,
    @Param('user2') user2: string,
  ): Promise<boolean> {
    return this.userChatService.checkChatExists(user1, user2);
  }*/

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
