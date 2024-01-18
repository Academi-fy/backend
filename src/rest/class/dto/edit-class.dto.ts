import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditClassDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly courses?: string[];

  @IsString()
  @IsOptional()
  readonly grade: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly members?: string[];

  @IsString()
  @IsOptional()
  readonly specifiedGrade?: string;

  @IsString()
  @IsOptional()
  readonly school?: string;
}
