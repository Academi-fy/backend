import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Day } from '../../../@generated-types';
import { ClubRequirement } from '../entities/club-requirement.entity';

@InputType()
export class EditClubDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  events?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  leaders?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  location?: string;

  @Field(() => Day, { nullable: true })
  @IsEnum(Day)
  @IsOptional()
  meetingDay?: Day;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  meetingTime?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => [ClubRequirement], { nullable: true })
  @IsArray()
  @IsOptional()
  requirements?: ClubRequirement[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  tags?: string[];
}
