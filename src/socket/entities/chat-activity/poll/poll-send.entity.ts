import { Poll } from '@/rest/chat-activity/entities/content-types/poll.entity';
import { IsInstance, IsString } from 'class-validator';

export class PollSend {
  @IsString()
  chatId: string;

  @IsString()
  creator: string;

  @IsInstance(Poll)
  poll: Poll;
}
