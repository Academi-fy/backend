import { IsString } from 'class-validator';

export class ClassUserMutation {
  @IsString()
  classId: string;

  @IsString()
  userId: string;
}
