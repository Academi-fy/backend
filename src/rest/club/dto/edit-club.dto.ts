import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Day } from '../../../@generated-types';
import { ClubRequirement } from '../entities/club-requirement.entity';

@InputType()
export class EditClubDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly events?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly leaders?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly location?: string;

  @Field(() => Day, { nullable: true })
  @IsEnum(Day)
  @IsOptional()
  readonly meetingDay?: Day;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly meetingTime?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @Field(() => [ClubRequirement], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly requirements?: ClubRequirement[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly school?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly tags?: string[];
}
