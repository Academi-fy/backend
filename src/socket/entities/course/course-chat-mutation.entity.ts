import { IsString } from 'class-validator';

export class CourseChatMutation {
  @IsString()
  courseId: string;

  @IsString()
  chatId: string;
}
