import { IsOptional, IsString } from 'class-validator';

export class CreateBlackboardDto {
  @IsString()
  readonly authors: string[];

  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @IsString()
  readonly school: string;

  @IsString()
  readonly tags: string[];

  @IsString()
  @IsOptional()
  readonly targets?: string[];

  @IsString()
  readonly title: string;

  @IsString()
  readonly text: string;

}
