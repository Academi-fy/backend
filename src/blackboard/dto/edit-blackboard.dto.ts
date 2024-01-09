import { IsOptional, IsString } from 'class-validator';

export class EditBlackboardDto {
  @IsString()
  @IsOptional()
  readonly authors?: string[];

  @IsString()
  @IsOptional()
  readonly coverImage?: string;

  @IsString()
  @IsOptional()
  readonly school?: string;

  @IsString()
  @IsOptional()
  readonly tags?: string[];

  @IsString()
  @IsOptional()
  readonly targets?: string[];

  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly text?: string;
}
