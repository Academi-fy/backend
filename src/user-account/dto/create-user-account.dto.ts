import { IsOptional, IsString } from 'class-validator';

export class CreateUserAccountDto {

  @IsString()
  readonly password: string;

  @IsString()
  readonly username: string;

}
