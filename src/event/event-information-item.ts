import { IsString } from 'class-validator';

export class EventInformationItem {
  @IsString()
  emoji: string;

  @IsString()
  description: string;
}
