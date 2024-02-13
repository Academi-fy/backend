import { IsString } from 'class-validator';

export class ClassCourseMutation {
  @IsString()
  classId: string;

  @IsString()
  courseId: string;
}
