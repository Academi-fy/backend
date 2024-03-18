import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ChatCourseMutation } from '@/socket/entities/chat';
import { Chat, Course } from '@/@generated-types';

export interface ChatCourseResult {
  data: GatewayMessage<ChatCourseMutation>;
  modifiedChat: Chat;
  course: Course;
}
