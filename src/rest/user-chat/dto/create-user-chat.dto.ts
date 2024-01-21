import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserChatDto {
  @Field(() => String)
  @IsString()
  chat: string;

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

  @Field(() => String)
  @IsString()
  user: string;
}
