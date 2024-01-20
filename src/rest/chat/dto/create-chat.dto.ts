import { IsArray, IsInstance, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Activity } from '../entities/activity.entity';

@InputType()
export class CreateChatDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @Field(() => [String])
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @Field(() => Activity, { nullable: true })
  @IsInstance(Activity)
  @IsOptional()
  readonly lastActivity?: Activity;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly messages?: string[];

  @Field(() => String)
  @IsString()
  readonly name: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly targets?: string[];

  @Field(() => String)
  @IsString()
  readonly type: string;
}
