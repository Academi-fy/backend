import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCourseDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @Field(() => [String])
  @IsArray()
  readonly classes: string[];

  @Field(() => [String])
  @IsArray()
  readonly members: string[];

  @Field(() => String)
  @IsString()
  readonly subject: string;

  @Field(() => String)
  @IsString()
  readonly teacher: string;
}
