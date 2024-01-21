import { SubjectType } from '../../../@generated-types';
import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateSubjectDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => String)
  @IsString()
  school: string;

  @Field(() => String)
  @IsString()
  shortName: string;

  @Field(() => SubjectType)
  @IsEnum(SubjectType)
  type: SubjectType;
}
