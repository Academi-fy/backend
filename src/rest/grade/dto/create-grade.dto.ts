import { Field, InputType } from '@nestjs/graphql';
import { GradeLevel } from '../../../@generated-types';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateGradeDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  classes?: string[];

  @Field(() => GradeLevel)
  @IsEnum(GradeLevel)
  level: GradeLevel;

  @Field(() => String)
  @IsString()
  school: string;
}
