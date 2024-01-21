import { IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserAccountDto {
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
}
