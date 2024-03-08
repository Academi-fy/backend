import { IsArray, IsString } from 'class-validator';

export class ActivityStar {
  @IsString()
  activityId: string;

  @IsArray()
  starred: boolean;
}
