import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { EventInformation } from '../entities';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditEventDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  readonly endDate?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly host?: string;

  @Field(() => [EventInformation], { nullable: true })
  @IsArray()
  @Type(() => EventInformation)
  @IsOptional()
  readonly information?: EventInformation[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly location?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly school?: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  readonly startDate?: Date;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly subscribers?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly tickets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;
}
