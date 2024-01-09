import { IsOptional, IsString } from 'class-validator';

export class EditBlackboardTagDto {
  @IsString()
  @IsOptional()
  readonly name?: string;
}
