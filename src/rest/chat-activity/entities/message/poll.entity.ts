import { IsArray, IsString } from 'class-validator';
import { User } from '@/@generated-types';

export class Poll {
  @IsString()
  question: string;

  @IsArray()
  options: {
    option: string;
    votedBy: User[];
  }[];

  @IsString()
  type: 'POLL';
}
