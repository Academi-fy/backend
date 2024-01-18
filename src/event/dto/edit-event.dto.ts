import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EventInformation } from '../event-information';

export class EditEventDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly classes?: string[];

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsDate()
  @IsOptional()
  readonly endDate?: Date;

  @IsString()
  @IsOptional()
  readonly host?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventInformation)
  @IsOptional()
  readonly information?: EventInformation[];

  @IsString()
  @IsOptional()
  readonly location?: string;

  @IsString()
  @IsOptional()
  readonly school?: string;

  @IsDate()
  @IsOptional()
  readonly startDate?: Date;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly subscribers?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly tickets?: string[];

  @IsString()
  @IsOptional()
  readonly title?: string;
}
