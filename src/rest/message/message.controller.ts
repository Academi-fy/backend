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

@UseGuards(JwtGuard)
@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  async getAll() {
    return this.messageService.getAllMessages();
  }

  @Get(':id')
  async getById(@Param('id') messageId: string) {
    return this.messageService.getMessageById(messageId);
  }

  @Post()
  async createMessage(@Body() dto: CreateMessageDto) {
    return this.messageService.createMessage(dto);
  }

  @Patch(':id')
  async editMessage(
    @Param('id') messageId: string,
    @Body() dto: CreateMessageDto,
  ) {
    return this.messageService.editMessage(messageId, dto);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') messageId: string) {
    return this.messageService.deleteMessage(messageId);
  }
}
