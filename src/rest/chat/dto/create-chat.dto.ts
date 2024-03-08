import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ChatType } from '@/@generated-types';

@InputType()
export class CreateChatDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  activities?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  avatar?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  targets?: string[];

  @Field(() => ChatType)
  @IsString()
  type: ChatType;
}
