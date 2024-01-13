import { Day } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class EditClubDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsArray()
  @IsOptional()
  readonly events?: string[];

  @IsArray()
  @IsOptional()
  readonly leaders?: string[];

  @IsString()
  @IsOptional()
  readonly location?: string;

  @IsEnum(Day)
  @IsOptional()
  readonly meetingDay?: Day;

  @IsString()
  @IsOptional()
  readonly meetingTime?: string;

  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsArray()
  @IsOptional()
  readonly requirements?: any[]; // TODO change to ClubRequirement Object

  @IsString()
  @IsOptional()
  readonly school?: string;

  @IsArray()
  @IsOptional()
  readonly tags?: string[];
}
