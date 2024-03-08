import { IsString } from 'class-validator';

export class ActivityChatTargetAdd {
  @IsString()
  chatId: string;

  @IsString()
  targetId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  avatar: string;
}

export class ActivityChatTargetRemove {
  @IsString()
  chatId: string;

  @IsString()
  targetId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  avatar: string;
}
