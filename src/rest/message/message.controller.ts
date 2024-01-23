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
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from '../../@generated-types';

@UseGuards(JwtGuard)
@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  async getAllMessages(): Promise<Message[]> {
    return this.messageService.getAllMessages();
  }

  @Get(':id')
  async getMessageById(@Param('id') messageId: string): Promise<Message> {
    return this.messageService.getMessageById(messageId);
  }

  @Post()
  async createMessage(@Body() dto: CreateMessageDto): Promise<Message> {
    return this.messageService.createMessage(dto);
  }

  @Patch(':id')
  async editMessage(
    @Param('id') messageId: string,
    @Body() dto: CreateMessageDto,
  ): Promise<Message> {
    return this.messageService.editMessage(messageId, dto);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') messageId: string): Promise<Message> {
    return this.messageService.deleteMessage(messageId);
  }
}
