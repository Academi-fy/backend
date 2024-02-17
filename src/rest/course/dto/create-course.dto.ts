import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCourseDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => [String])
  @IsArray()
  classes: string[];

  @Field(() => [String])
  @IsArray()
  members: string[];

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  subject: string;

  @Field(() => String)
  @IsString()
  teacher: string;
}
