import { Module } from '@nestjs/common';
import { UserChatController } from './user-chat.controller';
import { UserChatResolver } from './user-chat.resolver';
import { UserChatService } from './user-chat.service';

@Module({
  providers: [UserChatResolver, UserChatService],
  controllers: [UserChatController],
  exports: [UserChatService],
})
export class UserChatModule {}
