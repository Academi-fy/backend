import { IsString } from 'class-validator';

export class CreateSetupAccountDto {
  @IsString()
  readonly schoolName: string;
}
