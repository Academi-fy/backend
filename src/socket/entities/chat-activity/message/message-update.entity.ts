import { IsArray, IsString } from 'class-validator';
import { Poll } from '@/rest/chat-activity/entities/content-types/poll.entity';
import { Attachment } from '@/rest/chat-activity/entities/content-types/attachment.entity';
import { TextMessage } from '@/rest/chat-activity/entities/content-types/text-message.entity';

export class MessageUpdate {
  @IsString()
  activityId: string;

  @IsArray()
  content: (Attachment | Poll | TextMessage)[];
}
