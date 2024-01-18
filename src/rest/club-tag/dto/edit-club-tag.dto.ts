import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditClubTagDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly clubs?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;
}
