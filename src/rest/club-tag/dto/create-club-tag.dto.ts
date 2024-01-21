import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClubTagDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => String)
  @IsString()
  name: string;
}
