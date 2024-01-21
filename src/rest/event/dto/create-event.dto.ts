import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { EventInformation } from '../entities';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class CreateEventDto {
  @Field(() => [String])
  @IsArray()
  clubs: string[];

  @Field(() => String)
  @IsString()
  description: string;

  @Field(() => Date)
  @IsDate()
  endDate: Date;

  @Field(() => String)
  @IsString()
  host: string;

  @Field(() => [EventInformation])
  @IsArray()
  @Type(() => EventInformation)
  information: EventInformation[];

  @Field(() => String)
  @IsString()
  location: string;

  @Field(() => String)
  @IsString()
  school: string;

  @Field(() => Date)
  @IsDate()
  startDate: Date;

  @Field(() => [String])
  @IsArray()
  subscribers: string[];

  @Field(() => [String])
  @IsArray()
  @IsOptional()
  tickets?: string[];

  @Field(() => String)
  @IsString()
  title: string;
}
