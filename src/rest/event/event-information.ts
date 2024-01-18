import { EventInformationItem } from './event-information-item';
import { IsInstance, IsString } from 'class-validator';

export class EventInformation {
  @IsString()
  title: string;

  @IsInstance(EventInformationItem)
  items: EventInformationItem[];
}
