import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlackboardTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  blackboards?: string[];

  @Field(() => String)
  @IsString()
  name: string;
}
