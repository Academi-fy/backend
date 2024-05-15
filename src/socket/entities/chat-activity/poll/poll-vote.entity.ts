import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class PollVote {
  @IsString()
  activityId: string;

  @IsNumber()
  optionId: number;

  @IsString()
  userId: string;

  @IsBoolean()
  voteDeleted: boolean;
}
