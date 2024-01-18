import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditBlackboardTagDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly blackboards?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;
}
