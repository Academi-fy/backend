import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditClubTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly name?: string;
}
