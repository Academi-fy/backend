import { IsString } from 'class-validator';

export class ActivityChatCourseAdd {
  @IsString()
  chatId: string;

  @IsString()
  courseId: string;

  @IsString()
  courseName: string;
}

export class ActivityChatCourseRemove {
  @IsString()
  chatId: string;

  @IsString()
  courseId: string;

  @IsString()
  courseName: string;
}
