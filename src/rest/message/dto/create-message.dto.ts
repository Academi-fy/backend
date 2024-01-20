import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsInstance, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentType, Reaction } from '../entities';

@InputType()
export class CreateMessageDto {
  @Field(() => String)
  @IsString()
  author: string;

  @Field(() => String)
  @IsString()
  chat: string;

  @Field(() => [ContentType])
  @IsInstance(ContentType)
  content: ContentType[];

  editHistory?: null; // TODO future feature

  @Field(() => [Reaction])
  @IsArray()
  @Type(() => Reaction)
  @IsOptional()
  reactions?: Reaction[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  replies?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  replyTo?: string;
}
