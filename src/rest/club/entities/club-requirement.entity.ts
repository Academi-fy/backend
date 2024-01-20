import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClubRequirement {
  @Field(() => String)
  @IsString()
  readonly emoji: string;

  @Field(() => String)
  @IsString()
  readonly description: string;
}
