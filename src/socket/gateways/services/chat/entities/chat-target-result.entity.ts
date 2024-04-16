import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ChatTargetMutation } from '@/socket/entities/chat';
import { Chat, User } from '@/@generated-types';

export interface ChatTargetResult {
  data: GatewayMessage<ChatTargetMutation>;
  modifiedChat: Chat;
  target: User;
}
