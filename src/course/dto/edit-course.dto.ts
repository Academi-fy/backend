import { IsOptional, IsString } from 'class-validator';

export class EditCourseDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsString()
  @IsOptional()
  readonly classes?: string[];

  @IsString()
  @IsOptional()
  readonly members?: string[];

  @IsString()
  @IsOptional()
  readonly subject?: string;

  @IsString()
  @IsOptional()
  readonly teacher?: string;
}
