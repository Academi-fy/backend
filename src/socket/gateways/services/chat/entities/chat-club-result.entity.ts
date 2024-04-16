import { Chat, Club } from '@/@generated-types';
import { ChatClubMutation } from '@/socket/entities/chat';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

export interface ChatClubResult {
  data: GatewayMessage<ChatClubMutation>;
  modifiedChat: Chat;
  club: Club;
}
