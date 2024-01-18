import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditCourseDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly classes?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly members?: string[];

  @IsString()
  @IsOptional()
  readonly subject?: string;

  @IsString()
  @IsOptional()
  readonly teacher?: string;
}
