import { IsString } from 'class-validator';

export class ChatAvatarChange {
  @IsString()
  chatId: string;

  @IsString()
  avatar: string;
}
