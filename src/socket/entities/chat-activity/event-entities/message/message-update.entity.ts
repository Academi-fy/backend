import { IsArray, IsString } from 'class-validator';
import { Poll } from '@/rest/chat-activity/entities/message/poll.entity';
import { Attachment } from '@/rest/chat-activity/entities/message/attachment.entity';
import { TextMessage } from '@/rest/chat-activity/entities/message/text-message.entity';

export class MessageUpdate {
  @IsString()
  chatId: string;

  @IsArray()
  content: (Attachment | Poll | TextMessage)[];
}
