import { IsString } from 'class-validator';

export class ChatClubMutation {
  @IsString()
  chatId: string;

  @IsString()
  clubId: string;
}
