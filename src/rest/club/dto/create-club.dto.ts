import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ClubRequirement } from '../entities/club-requirement.entity';
import { Day } from '../../../@generated-types';

@InputType()
export class CreateClubDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @Field(() => String)
  @IsString()
  readonly coverImage: string;

  @Field(() => String)
  @IsString()
  readonly description: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly events?: string[];

  @Field(() => [String])
  @IsArray()
  readonly leaders: string[];

  @Field(() => String)
  @IsString()
  readonly location: string;

  @Field(() => Day)
  @IsEnum(Day)
  readonly meetingDay: Day;

  @Field(() => String)
  @IsString()
  readonly meetingTime: string;

  @Field(() => [String])
  @IsArray()
  readonly members: string[];

  @Field(() => String)
  @IsString()
  readonly name: string;

  @Field(() => [ClubRequirement])
  @IsArray()
  readonly requirements: ClubRequirement[];

  @Field(() => String)
  @IsString()
  readonly school: string;

  @Field(() => [String])
  @IsArray()
  readonly tags: string[];
}
