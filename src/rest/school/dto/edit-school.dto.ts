import { IsOptional, IsString } from 'class-validator';

export class EditSchoolDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly setupAccount?: string;
}
