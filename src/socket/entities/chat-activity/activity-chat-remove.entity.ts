import { IsObject, IsString } from 'class-validator';

export class ActivityChatRemove<T> {
  @IsObject()
  removed: T;

  @IsString()
  removedId: string;
}
