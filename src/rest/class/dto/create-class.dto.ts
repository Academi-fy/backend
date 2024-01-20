import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClassDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @Field(() => String)
  @IsString()
  readonly grade: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @Field(() => String)
  @IsString()
  readonly school: string;

  @Field(() => String)
  @IsString()
  readonly specifiedGrade: string;
}
