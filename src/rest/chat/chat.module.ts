import { Module } from '@nestjs/common';

import { ChatController } from './chat.controller';
import { ChatService } from './services/chat.service';
import { ChatResolver } from './chat.resolver';
import { ChatCacheService } from '@/rest/chat/services/chat-cache.service';
import { ChatDatabaseService } from '@/rest/chat/services/chat-database.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatCacheService, ChatDatabaseService, ChatResolver],
  exports: [ChatService],
})
export class ChatModule {}
