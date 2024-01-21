import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditUserChatDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  chat?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  hidden?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  pinned?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  read?: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  user?: string;
}
