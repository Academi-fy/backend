import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { GradeLevel } from '../../../@generated-types';

@InputType()
export class EditGradeDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  classes?: string[];

  @Field(() => GradeLevel, { nullable: true })
  @IsEnum(GradeLevel)
  @IsOptional()
  level?: GradeLevel;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;
}
