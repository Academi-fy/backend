import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateBlackboardTagDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly blackboards?: string[];

  @IsString()
  readonly name: string;
}
