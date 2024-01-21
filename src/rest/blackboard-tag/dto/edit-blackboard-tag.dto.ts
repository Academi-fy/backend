import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditBlackboardTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  blackboards?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;
}
