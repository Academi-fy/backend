import { IsString } from 'class-validator';

export class CreateClassDto {
  @IsString()
  readonly grade: string;

  @IsString()
  readonly school: string;

  @IsString()
  readonly specifiedGrade: string;
}
