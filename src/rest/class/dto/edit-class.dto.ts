import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditClassDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  grade?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  specifiedGrade?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;
}
