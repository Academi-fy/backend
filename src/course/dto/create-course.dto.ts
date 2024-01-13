import { IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsOptional()
  readonly chat?: string;

  @IsString()
  readonly classes: string[];

  @IsString()
  readonly members: string[];

  @IsString()
  readonly subject: string;

  @IsString()
  readonly teacher: string;
}
