import { IsArray, IsBoolean, IsString } from 'class-validator';
import { User } from '@/@generated-types';

export class Poll {
  @IsString()
  question: string;

  @IsArray()
  options: {
    option: string;
    votedBy: User[];
  }[];

  @IsBoolean()
  closed: boolean;

  @IsBoolean()
  result_published: boolean;

  @IsString()
  type: 'POLL';
}
