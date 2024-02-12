import { Field, InputType } from '@nestjs/graphql';
import { ChatActivityType } from '../../../@generated-types';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateChatActivityDto {
  @Field(() => String)
  @IsString()
  chat: string;

  @Field(() => String)
  @IsString()
  executor: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsOptional()
  readBy?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  target?: string;

  @Field(() => ChatActivityType)
  @IsString()
  type: ChatActivityType;

  @Field(() => String)
  @IsString()
  value: any;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  starred?: boolean;
}
