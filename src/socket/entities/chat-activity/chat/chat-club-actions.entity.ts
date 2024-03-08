import { IsString } from 'class-validator';

export class ActivityChatClubMutation {
  @IsString()
  name: string;

  @IsString()
  avatar: string;
}
