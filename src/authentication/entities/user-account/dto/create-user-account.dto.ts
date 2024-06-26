import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserAccountDto {
  @Field(() => String)
  @IsString()
  @IsOptional()
  email?: string;

  @Field(() => String)
  @IsString()
  password: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  user?: string;

  @Field(() => String)
  @IsString()
  username: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  refreshTokens?: string[];
}
