import { Module } from '@nestjs/common';
import { ChatActivityController } from './chat-activity.controller';
import { ChatActivityResolver } from './chat-activity.resolver';
import { ChatActivityService } from './chat-activity.service';

@Module({
  controllers: [ChatActivityController],
  providers: [ChatActivityResolver, ChatActivityService],
  exports: [ChatActivityService],
})
export class ChatActivityModule {}
