import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditClassDto {
  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @IsString()
  @IsOptional()
  readonly grade: string;

  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @IsString()
  @IsOptional()
  readonly specifiedGrade?: string;

  @IsString()
  @IsOptional()
  readonly school?: string;
}
