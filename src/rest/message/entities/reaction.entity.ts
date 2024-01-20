import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class Reaction {
  @Field(() => String)
  @IsString()
  emoji: string;

  @Field(() => Number)
  @IsNumber()
  count: number;
}
