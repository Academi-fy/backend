import { IsArray, IsOptional, IsString } from 'class-validator';
import { Directive, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlackboardDto {
  @Field(() => [String])
  @IsArray()
  readonly authors: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @Field(() => String)
  @IsString()
  readonly school: string;

  @Field(() => [String], { nullable: true })
  @Directive('@upper')
  @IsArray()
  @IsOptional()
  readonly tags?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly targets?: string[];

  @Field(() => String)
  @IsString()
  readonly title: string;

  @Field(() => String)
  @IsString()
  readonly text: string;
}
