import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateEventTicketDto {
  @Field(() => String)
  @IsString()
  buyer: string;

  @Field(() => String)
  @IsString()
  event: string;

  @Field(() => Number)
  @IsNumber()
  price: number;

  @Field(() => Date)
  @IsDate()
  saleDate: Date;
}
