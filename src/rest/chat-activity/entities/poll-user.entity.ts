import { IsString } from 'class-validator';

export class PollUser {
  @IsString()
  avatar: string;

  @IsString()
  userId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
