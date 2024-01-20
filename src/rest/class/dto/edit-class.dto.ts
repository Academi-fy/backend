import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditClassDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly grade: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly specifiedGrade?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly school?: string;
}
