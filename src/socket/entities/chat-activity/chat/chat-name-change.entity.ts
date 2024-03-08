import { IsOptional, IsString } from 'class-validator';

export class ChatNameChange {
  @IsString()
  chatId: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  oldName: string;
}
