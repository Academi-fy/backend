import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EventInformationItem {
  @Field(() => String)
  @IsString()
  emoji: string;

  @Field(() => String)
  @IsString()
  description: string;
}
