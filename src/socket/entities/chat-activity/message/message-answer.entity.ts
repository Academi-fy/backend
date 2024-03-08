import { IsArray, IsString } from 'class-validator';
import { Attachment } from '@/rest/chat-activity/entities/content-types/attachment.entity';
import { Poll } from '@/rest/chat-activity/entities/content-types/poll.entity';
import { TextMessage } from '@/rest/chat-activity/entities/content-types/text-message.entity';

export class MessageAnswer {
  @IsString()
  answeredId: string;

  @IsArray()
  content: (Attachment | Poll | TextMessage)[];
}
