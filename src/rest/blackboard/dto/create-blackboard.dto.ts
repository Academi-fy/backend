import { IsArray, IsOptional, IsString } from 'class-validator';
import { Directive, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlackboardDto {
  @Field(() => [String])
  @IsArray()
  authors: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @Field(() => String)
  @IsString()
  school: string;

  @Field(() => [String], { nullable: true })
  @Directive('@upper')
  @IsArray()
  @IsOptional()
  tags?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  targets?: string[];

  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String)
  @IsString()
  text: string;
}
