import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateEventTicketDto {
  @Field(() => String)
  @IsString()
  readonly buyer: string;

  @Field(() => String)
  @IsString()
  readonly event: string;

  @Field(() => Number)
  @IsNumber()
  readonly price: number;

  @Field(() => Date)
  @IsDate()
  readonly saleDate: Date;
}
