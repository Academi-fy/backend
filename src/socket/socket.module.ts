import { Module } from '@nestjs/common';

import { BlackboardGateway } from './gateways/blackboard.gateway';
import { ChatGateway } from './gateways/chat.gateway';
import { ClassGateway } from './gateways/class.gateway';
import { ClubGateway } from './gateways/club.gateway';
import { ConnectGateway } from './gateways/connect.gateway';
import { CourseGateway } from './gateways/course.gateway';
import { ErrorGateway } from './gateways/error.gateway';
import { EventGateway } from './gateways/event.gateway';
import { UserGateway } from './gateways/user.gateway';

import { RestModule } from '../rest/rest.module';

@Module({
  providers: [
    BlackboardGateway,
    ChatGateway,
    ClassGateway,
    ClubGateway,
    CourseGateway,
    ErrorGateway,
    EventGateway,
    UserGateway,
    ConnectGateway,
  ],
  imports: [RestModule],
})
export class SocketModule {}
