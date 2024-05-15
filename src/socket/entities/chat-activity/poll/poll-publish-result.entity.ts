import { IsBoolean, IsString } from 'class-validator';

export class PollPublishResult {
  @IsString()
  activityId: string;

  @IsBoolean()
  result_published: boolean;
}
