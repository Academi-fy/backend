import { IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditUserAccountDto {
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
}
