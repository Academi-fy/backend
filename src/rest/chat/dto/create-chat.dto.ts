import { IsArray, IsInstance, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Activity } from '../entities/activity.entity';

@InputType()
export class CreateChatDto {
  @Field(() => [String])
  @IsArray()
  @IsOptional()
  activities?: any[]; //TODO activity entity

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  avatar?: string;

  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  chatHistory?: string[];

  @Field(() => [String])
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => Activity, { nullable: true })
  @IsInstance(Activity)
  @IsOptional()
  lastActivity?: Activity;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  messages?: string[];

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  targets?: string[];

  @Field(() => String)
  @IsString()
  type: string;
}
