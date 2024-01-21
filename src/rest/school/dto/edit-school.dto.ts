import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditSchoolDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  blackboards?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  classes?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  events?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  grades?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  setupAccount?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  subjects?: string[];
}
