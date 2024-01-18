import { Day } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsString()
  readonly coverImage: string;

  @IsString()
  readonly description: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly events?: string[];

  @IsArray()
  @IsString({ each: true })
  readonly leaders: string[];

  @IsString()
  readonly location: string;

  @IsEnum(Day)
  readonly meetingDay: Day;

  @IsString()
  readonly meetingTime: string;

  @IsArray()
  @IsString({ each: true })
  readonly members: string[];

  @IsString()
  readonly name: string;

  @IsArray()
  readonly requirements: any[]; // TODO input ClubRequirement Object

  @IsString()
  readonly school: string;

  @IsArray()
  @IsString({ each: true })
  readonly tags: string[];
}
