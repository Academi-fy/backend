import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageResolver } from './message.resolver';

@Module({
  providers: [MessageService, MessageResolver],
  controllers: [MessageController],
})
export class MessageModule {}
