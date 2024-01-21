import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditEventTicketDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  buyer?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  event?: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  price?: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  saleDate?: Date;
}
