import { IsOptional, IsString } from 'class-validator';

export class EditClassDto {
  @IsString()
  @IsOptional()
  readonly grade?: string;

  @IsString()
  @IsOptional()
  readonly specifiedGrade?: string;
}
