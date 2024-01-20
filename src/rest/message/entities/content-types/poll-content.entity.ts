import { Poll } from '../poll.entity';
import { Field, InputType } from '@nestjs/graphql';
import { IsInstance, IsString } from 'class-validator';

@InputType()
export class PollContent {
  @Field(() => Poll)
  @IsString()
  type: 'POLL';

  @Field(() => Poll)
  @IsInstance(Poll)
  value: Poll;
}
