import { Field, InputType } from '@nestjs/graphql';
import { ChatActivityType } from '../../../@generated-types';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditChatActivityDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  answeredBy?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  answerTo?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  executor?: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsOptional()
  readBy?: string[];

  @Field(() => ChatActivityType, { nullable: true })
  @IsString()
  @IsOptional()
  type?: ChatActivityType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  value?: any;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  starred?: boolean;
}
