import { IsOptional, IsString } from 'class-validator';
import { Directive, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlackboardDto {
  @Field(() => [String])
  @IsString()
  readonly authors: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @Field(() => String)
  @IsString()
  readonly school: string;

  @Field(() => [String])
  @Directive('@upper')
  @IsString()
  readonly tags: string[];

  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  readonly targets?: string[];

  @Field(() => String)
  @IsString()
  readonly title: string;

  @Field(() => String)
  @IsString()
  readonly text: string;
}
