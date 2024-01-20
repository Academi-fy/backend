import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClubTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @Field(() => String)
  @IsString()
  readonly name: string;
}
