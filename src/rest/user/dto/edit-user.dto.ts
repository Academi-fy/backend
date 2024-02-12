import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { UserType } from '../../../@generated-types';

@InputType()
export class EditUserDto {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  activities?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  avatar?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  blackboards?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  blackboardsReceived?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  classes?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubs?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  clubsAsLeader?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  courses?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  coursesAsTeacher?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  events?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  eventTickets?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  firstName: string;

  @Field(() => String)
  @IsString()
  lastName: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  readActivities?: string[];

  @Field(() => [String])
  @IsArray()
  schools: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  targetActivities?: string[];

  @Field(() => String)
  @IsString()
  type: UserType;

  @Field(() => String)
  @IsString()
  userAccount: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  userChats?: string[];
}
