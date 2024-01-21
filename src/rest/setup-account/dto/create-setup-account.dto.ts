import { IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSetupAccountDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  school?: string;

  @Field(() => String)
  @IsString()
  schoolName: string;
}
