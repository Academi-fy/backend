import { IsOptional, IsString } from 'class-validator';

export class EditChatDto {
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly type?: string;
}
