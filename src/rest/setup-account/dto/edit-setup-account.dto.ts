import { IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditSetupAccountDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  schoolName?: string;
}
