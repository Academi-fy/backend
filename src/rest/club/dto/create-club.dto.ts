import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ClubRequirement } from '../entities/club-requirement.entity';
import { Day } from '../../../@generated-types';

@InputType()
export class CreateClubDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => String)
  @IsString()
  coverImage: string;

  @Field(() => String)
  @IsString()
  description: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  events?: string[];

  @Field(() => [String])
  @IsArray()
  leaders: string[];

  @Field(() => String)
  @IsString()
  location: string;

  @Field(() => Day)
  @IsEnum(Day)
  meetingDay: Day;

  @Field(() => String)
  @IsString()
  meetingTime: string;

  @Field(() => [String])
  @IsArray()
  members: string[];

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => [ClubRequirement])
  @IsArray()
  requirements: ClubRequirement[];

  @Field(() => String)
  @IsString()
  school: string;

  @Field(() => [String])
  @IsArray()
  tags: string[];
}
