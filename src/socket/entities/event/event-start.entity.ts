import { IsString } from 'class-validator';

export class EventStart {
  @IsString()
  eventId: string;

  @IsString()
  start: boolean;

  @IsString()
  message: string;
}
