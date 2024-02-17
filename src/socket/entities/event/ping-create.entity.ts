import { IsString } from 'class-validator';

export class PingCreate {
  @IsString()
  eventId: string;

  @IsString()
  pingTitle: string;

  @IsString()
  pingDescription: string;
}
