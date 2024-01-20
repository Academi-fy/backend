import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString } from 'class-validator';

@InputType()
export class PollAnswer {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String)
  @IsString()
  text: string;

  @Field(() => String)
  @IsString()
  emoji: string;

  @Field(() => [String])
  @IsArray()
  voters: string[];
}
