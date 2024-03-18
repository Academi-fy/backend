import { IsArray, IsBoolean, IsString } from 'class-validator';
import { User } from '@/@generated-types';

export class PollOption {
  @IsString()
  option: string;

  @IsArray()
  votedBy: User[];
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
