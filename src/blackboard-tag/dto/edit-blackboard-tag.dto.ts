import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditBlackboardTagDto {

  @IsArray()
  @IsOptional()
  readonly blackboards?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;
}
