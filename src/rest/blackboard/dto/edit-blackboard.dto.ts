import { IsOptional, IsString } from 'class-validator';
import { Directive, Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditBlackboardDto {
  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  authors?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => [String], { nullable: true })
  @Directive('@upper')
  @IsString()
  @IsOptional()
  tags?: string[];

  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  targets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  text?: string;
}
