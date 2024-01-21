import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { EventInformation } from '../entities';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditEventDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  endDate?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  host?: string;

  @Field(() => [EventInformation], { nullable: true })
  @IsArray()
  @Type(() => EventInformation)
  @IsOptional()
  information?: EventInformation[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  location?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  subscribers?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  tickets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  title?: string;
}
