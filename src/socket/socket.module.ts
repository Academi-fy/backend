import { Module } from '@nestjs/common';
import { MessageGateway } from './gateways/message.gateway';
import { BlackboardGateway } from './gateways/blackboard.gateway';
import { ChatGateway } from './gateways/chat.gateway';
import { ClassGateway } from './gateways/class.gateway';
import { ClubGateway } from './gateways/club.gateway';
import { CourseGateway } from './gateways/course.gateway';
import { ErrorGateway } from './gateways/error.gateway';
import { EventGateway } from './gateways/event.gateway';
import { UserGateway } from './gateways/user.gateway';
import { BlackboardModule, ChatModule, UserChatModule } from 'src/rest';

//TODO index.ts for gateways

@Module({
  providers: [
    BlackboardGateway,
    ChatGateway,
    ClassGateway,
    ClubGateway,
    CourseGateway,
    ErrorGateway,
    EventGateway,
    MessageGateway,
    UserGateway,
  ],
  imports: [BlackboardModule, ChatModule, UserChatModule],
})
export class SocketModule {}
