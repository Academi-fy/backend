import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { SubjectType } from '../../../@generated-types';

@InputType()
export class EditSubjectDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  shortName?: string;

  @Field(() => SubjectType, { nullable: true })
  @IsEnum(SubjectType)
  @IsOptional()
  type?: SubjectType;
}
