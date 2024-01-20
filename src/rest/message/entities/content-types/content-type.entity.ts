import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class ContentType {
  @Field(() => String)
  @IsString()
  type: string;

  @Field(() => String)
  @IsString()
  value: string;
}
