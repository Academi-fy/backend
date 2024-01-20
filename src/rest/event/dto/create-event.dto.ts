import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { EventInformation } from '../entities';
import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class CreateEventDto {
  @Field(() => [String])
  @IsArray()
  readonly clubs: string[];

  @Field(() => String)
  @IsString()
  readonly description: string;

  @Field(() => Date)
  @IsDate()
  readonly endDate: Date;

  @Field(() => String)
  @IsString()
  readonly host: string;

  @Field(() => [EventInformation])
  @IsArray()
  @Type(() => EventInformation)
  readonly information: EventInformation[];

  @Field(() => String)
  @IsString()
  readonly location: string;

  @Field(() => String)
  @IsString()
  readonly school: string;

  @Field(() => Date)
  @IsDate()
  readonly startDate: Date;

  @Field(() => [String])
  @IsArray()
  readonly subscribers: string[];

  @Field(() => [String])
  @IsArray()
  @IsOptional()
  readonly tickets?: string[];

  @Field(() => String)
  @IsString()
  readonly title: string;
}
