import { Module } from '@nestjs/common';

import { ChatController } from './chat.controller';
import { ChatService } from './services/chat.service';
import { ChatResolver } from './chat.resolver';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatResolver],
  exports: [ChatService],
})
export class ChatModule {}
