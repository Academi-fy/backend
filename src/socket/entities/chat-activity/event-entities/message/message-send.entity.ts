import { Attachment } from '@/rest/chat-activity/entities/message/attachment.entity';
import { Poll } from '@/rest/chat-activity/entities/message/poll.entity';
import { TextMessage } from '@/rest/chat-activity/entities/message/text-message.entity';
import { IsArray, IsString } from 'class-validator';

export class MessageSend {
  @IsString()
  chatId: string;

  @IsArray()
  content: (Attachment | Poll | TextMessage)[];
}
