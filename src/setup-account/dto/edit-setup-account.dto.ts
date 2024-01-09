import { IsOptional, IsString } from 'class-validator';

export class EditSetupAccountDto {
  @IsString()
  @IsOptional()
  readonly schoolName?: string;
}
