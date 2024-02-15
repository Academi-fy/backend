import { IsString } from 'class-validator';

export class ClubEventMutation {
  @IsString()
  clubId: string;

  @IsString()
  eventId: string;
}
