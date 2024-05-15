import { IsBoolean, IsString } from 'class-validator';

export class PollOpenClose {
  @IsString()
  activityId: string;

  @IsBoolean()
  isClosed: boolean;
}
