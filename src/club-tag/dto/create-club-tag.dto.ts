import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateClubTagDto {
  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @IsString()
  readonly name: string;
}
