import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateClubTagDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly clubs?: string[];

  @IsString()
  readonly name: string;
}
