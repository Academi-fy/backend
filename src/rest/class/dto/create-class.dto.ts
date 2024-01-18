import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateClassDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly courses?: string[];

  @IsString()
  readonly grade: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly members?: string[];

  @IsString()
  readonly school: string;

  @IsString()
  readonly specifiedGrade: string;
}
