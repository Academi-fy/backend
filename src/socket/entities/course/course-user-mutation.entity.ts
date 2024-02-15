import { IsString } from 'class-validator';

export class CourseUserMutation {
  @IsString()
  courseId: string;

  @IsString()
  userId: string;
}
