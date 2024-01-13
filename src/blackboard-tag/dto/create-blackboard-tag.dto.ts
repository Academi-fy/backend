import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateBlackboardTagDto {
  @IsArray()
  @IsOptional()
  readonly blackboards?: string[];

  @IsString()
  readonly name: string;
}
