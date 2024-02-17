import { Field, InputType } from '@nestjs/graphql';
import { ChatActivityType } from '@/@generated-types';
import { IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateChatActivityDto<T> {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  answeredBy?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  answerTo?: string;

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

  @Field(() => ChatActivityType)
  @IsString()
  type: ChatActivityType;

  @Field(() => GraphQLJSON)
  @IsObject()
  value: T;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  starred?: boolean;
}
