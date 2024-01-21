import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditCourseDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  classes?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  subject?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  teacher?: string;
}
