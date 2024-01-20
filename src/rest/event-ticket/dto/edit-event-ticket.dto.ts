import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class EditEventTicketDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly buyer?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly event?: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly price?: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  readonly saleDate?: Date;
}
