import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { PollUser } from '@/rest/chat-activity/entities/poll-user.entity';

export class PollOption {
  @IsNumber()
  id: number;

  @IsString()
  option: string;

  @IsArray()
  votedBy: PollUser[];

  @IsNumber()
  votes: number;
}

export class Poll {
  @IsString()
  question: string;

  @IsArray()
  options: PollOption[];

  @IsBoolean()
  closed: boolean;

  @IsBoolean()
  result_published: boolean;

  @IsString()
  type: 'POLL';
}
