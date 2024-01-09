import { IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;
}
