import { IsOptional, IsString } from 'class-validator';

export class EditUserAccountDto {

  @IsString()
  @IsOptional()
  readonly password?: string;

  @IsString()
  @IsOptional()
  readonly userId?: string;

  @IsString()
  @IsOptional()
  readonly username?: string;

}
