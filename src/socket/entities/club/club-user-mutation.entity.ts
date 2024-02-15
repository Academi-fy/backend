import { IsString } from 'class-validator';

export class ClubUserMutation {
  @IsString()
  clubId: string;

  @IsString()
  userId: string;
}
