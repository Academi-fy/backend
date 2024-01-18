import { IsOptional, IsString } from 'class-validator';
import { Directive, Field } from '@nestjs/graphql';

export class CreateBlackboardDto {
  @Field(() => [String])
  @IsString()
  readonly authors: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  readonly school: string;

  @Field()
  @Directive('@upper')
  @IsString()
  readonly tags: string[];

  @Field()
  @IsString()
  @IsOptional()
  readonly targets?: string[];

  @Field()
  @IsString()
  readonly title: string;

  @Field()
  @IsString()
  readonly text: string;
}
