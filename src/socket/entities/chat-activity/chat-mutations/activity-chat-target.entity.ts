import { IsString } from 'class-validator';

export class ActivityChatTargetAdd {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  avatar: string;
}

export class ActivityChatTargetRemove {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  avatar: string;
}
