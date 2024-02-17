import { IsString } from 'class-validator';

export class ActivityChatCourseAdd {
  @IsString()
  name: string;
}

export class ActivityChatCourseRemove {
  @IsString()
  name: string;
}
