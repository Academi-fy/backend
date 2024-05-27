import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditUserAccountDto {
  @Field(() => String)
  @IsString()
  @IsOptional()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  password?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  user?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  username?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  refreshTokens?: string[];
}
