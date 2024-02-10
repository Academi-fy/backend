import { IsString } from 'class-validator';

export class EventResponse<T> {
  @IsString()
  event: string;

  body: T;
}
