import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClassDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => String)
  @IsString()
  grade: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  members?: string[];

  @Field(() => String)
  @IsString()
  school: string;

  @Field(() => String)
  @IsString()
  specifiedGrade: string;
}
