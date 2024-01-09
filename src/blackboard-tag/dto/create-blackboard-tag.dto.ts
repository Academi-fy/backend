import { IsString } from 'class-validator';

export class CreateBlackboardTagDto {
  @IsString()
  readonly name: string;
}
