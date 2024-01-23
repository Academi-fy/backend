import { Module } from '@nestjs/common';
import { MessageGateway } from './gateways/message/message.gateway';
import { BlackboardGateway } from './gateways/blackboard/blackboard.gateway';
import { ChatGateway } from './gateways/chat/chat.gateway';
import { ClassGateway } from './gateways/class/class.gateway';
import { ClubGateway } from './gateways/club/club.gateway';
import { CourseGateway } from './gateways/course/course.gateway';
import { ErrorGateway } from './gateways/error/error.gateway';
import { EventGateway } from './gateways/event/event.gateway';
import { UserGateway } from './gateways/user/user.gateway';
import { BlackboardModule } from 'src/rest';

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
  imports: [BlackboardModule]
})
export class SocketModule {}
