import { IsString } from 'class-validator';
import { EditEventDto } from '@/rest/event';

export class EventUpdate extends EditEventDto {
  @IsString()
  readonly eventId: string;
}
