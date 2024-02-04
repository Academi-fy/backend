import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsInstance, IsOptional, IsString } from 'class-validator';
import { ContentType } from '../entities/content-types';
import { Type } from 'class-transformer';
import { Reaction } from '../entities';

@InputType()
export class EditMessageDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  author?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => [ContentType], { nullable: true })
  @IsInstance(ContentType)
  @IsOptional()
  content?: ContentType[];

  editHistory?: null;

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

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  userMessages?: string[];
}
