import { IsArray } from 'class-validator';
import { Poll } from '@/socket/entities/chat-activity/event-entities/message-content-types/poll.entity';
import { Attachment } from '@/socket/entities/chat-activity/event-entities/message-content-types/attachment.entity';
import { TextMessage } from '@/socket/entities/chat-activity/event-entities/message-content-types/text-message.entity';

export class MessageMutation {
  @IsArray()
  content: (Attachment | Poll | TextMessage)[];
}
