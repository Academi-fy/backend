import { PollAnswer } from './poll-answer.entity';
import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class Poll {
  @Field(() => String)
  @IsString()
  question: string;

  @Field(() => [PollAnswer])
  @IsArray()
  @Type(() => PollAnswer)
  answers: PollAnswer[];

  @Field(() => Number)
  @IsNumber()
  maxVotesPerUser: number;
}
