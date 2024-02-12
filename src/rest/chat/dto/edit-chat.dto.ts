import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditChatDto {
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

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  targets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  type?: string;
}
