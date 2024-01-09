import { IsString } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly setupAccount: string;
}
