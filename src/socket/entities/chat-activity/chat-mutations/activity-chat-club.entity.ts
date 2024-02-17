import { IsString } from 'class-validator';

export class ActivityChatClubAdd {
  @IsString()
  name: string;

  @IsString()
  avatar: string;
}
