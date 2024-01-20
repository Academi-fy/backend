import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditCourseDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly classes?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly subject?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly teacher?: string;
}
