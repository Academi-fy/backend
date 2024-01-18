import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlackboardTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly blackboards?: string[];

  @Field(() => String)
  @IsString()
  readonly name: string;
}
