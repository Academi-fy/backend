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
import { JwtGuard } from '../../auth/guard';
import { UserChatService } from './user-chat.service';
import { CreateUserChatDto, EditUserChatDto } from './dto';

@UseGuards(JwtGuard)
@Controller('user-chats')
export class UserChatController {
  constructor(private userChatService: UserChatService) {}

  @Get()
  async getAllUserChats() {
    return this.userChatService.getAllUserChats();
  }

  @Get(':id')
  async getUserChatById(@Param('id') id: string) {
    return this.userChatService.getUserChatById(id);
  }

  @Post()
  async createUserChat(@Body() dto: CreateUserChatDto) {
    return this.userChatService.createUserChat(dto);
  }

  @Patch(':id')
  async editUserChat(@Param('id') id: string, @Body() dto: EditUserChatDto) {
    return this.userChatService.editUserChat(id, dto);
  }

  @Delete(':id')
  async deleteUserChat(@Param('id') id: string) {
    return this.userChatService.deleteUserChat(id);
  }
}
