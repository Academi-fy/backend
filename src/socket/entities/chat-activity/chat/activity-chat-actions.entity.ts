import { IsObject, IsString } from 'class-validator';

export class ActivityChatAddAction<T> {
  @IsString()
  chatName: string;

  @IsObject()
  added: T;

  @IsString()
  addedId: string;
}

export class ActivityChatRemoveAction<T> {
  @IsString()
  chatName: string;

  @IsObject()
  removed: T;

  @IsString()
  removedId: string;
}
