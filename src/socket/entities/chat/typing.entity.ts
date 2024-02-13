import { IsString } from 'class-validator';

export class Typing {
  @IsString()
  chatId: string;

  @IsString()
  typing: boolean;
}
