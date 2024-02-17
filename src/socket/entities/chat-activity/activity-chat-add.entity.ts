import { IsObject, IsString } from 'class-validator';

export class ActivityChatAdd<T> {
  @IsObject()
  added: T;

  @IsString()
  addedId: string;
}
