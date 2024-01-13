import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditClubTagDto {
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;
}
