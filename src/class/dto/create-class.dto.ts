import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateClassDto {
  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @IsString()
  readonly grade: string;

  @IsArray()
  @IsOptional()
  readonly members?: string[];

  @IsString()
  readonly school: string;

  @IsString()
  readonly specifiedGrade: string;
}
