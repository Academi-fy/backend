import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { EventInformation } from '../event-information';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsArray()
  @IsString({ each: true })
  readonly classes: string[];

  @IsString()
  readonly description: string;

  @IsDate()
  readonly endDate: Date;

  @IsString()
  readonly host: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventInformation)
  readonly information: EventInformation[];

  @IsString()
  readonly location: string;

  @IsString()
  readonly school: string;

  @IsDate()
  readonly startDate: Date;

  @IsArray()
  @IsString({ each: true })
  readonly subscribers: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly tickets?: string[];

  @IsString()
  readonly title: string;
}
