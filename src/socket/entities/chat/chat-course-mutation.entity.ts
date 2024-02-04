import { IsString } from 'class-validator';

export class ChatCourseMutation {
  @IsString()
  chatId: string;

  @IsString()
  courseId: string;
}
