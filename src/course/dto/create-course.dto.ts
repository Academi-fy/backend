import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsArray()
  @IsString({ each: true })
  readonly classes: string[];

  @IsArray()
  @IsString({ each: true })
  readonly members: string[];

  @IsString()
  readonly subject: string;

  @IsString()
  readonly teacher: string;
}
