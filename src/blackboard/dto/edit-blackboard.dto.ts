import { IsOptional, IsString } from 'class-validator';
import { Directive, Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditBlackboardDto {
  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  readonly authors?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly school?: string;

  @Field(() => [String], { nullable: true })
  @Directive('@upper')
  @IsString()
  @IsOptional()
  readonly tags?: string[];

  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  readonly targets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly text?: string;
}
