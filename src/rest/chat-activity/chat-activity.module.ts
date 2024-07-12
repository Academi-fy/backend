import { Module } from '@nestjs/common';

import { ChatActivityController } from './chat-activity.controller';
import { ChatActivityResolver } from './chat-activity.resolver';
import { ChatActivityDatabaseService } from './services/chat-activity-database.service';
import { ChatActivityService } from '@/rest/chat-activity/services/chat-activity.service';
import { ChatActivityCacheService } from '@/rest/chat-activity/services/chat-activity-cache.service';

@Module({
  controllers: [ChatActivityController],
  providers: [
    ChatActivityResolver,
    ChatActivityDatabaseService,
    ChatActivityService,
    ChatActivityCacheService,
  ],
  exports: [ChatActivityDatabaseService],
})
export class ChatActivityModule {}
