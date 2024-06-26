import { Module } from '@nestjs/common';

import { BlackboardGateway } from './gateways/blackboard.gateway';
import { ChatGateway } from './gateways/chat.gateway';
import { ClassGateway } from './gateways/class.gateway';
import { ClubGateway } from './gateways/club.gateway';
import { ConnectGateway } from './gateways/connect.gateway';
import { CourseGateway } from './gateways/course.gateway';
import { ErrorGateway } from './gateways/error.gateway';
import { EventGateway } from './gateways/event.gateway';

import { RestModule } from '@/rest/rest.module';
import { ChatActivityGateway } from '@/socket/gateways/chat-activity.gateway';
import { CreateChatActivityService } from '@/socket/gateways/services/create-chat-activity.service';
import { ChatClubService } from '@/socket/gateways/services/chat/chat-club.service';
import { ChatCourseService } from '@/socket/gateways/services/chat/chat-course.service';
import { ChatTargetService } from '@/socket/gateways/services/chat/chat-target.service';
import { GatewayServicesModule } from '@/socket/gateways/services/gateway-services.module';

@Module({
  providers: [
    BlackboardGateway,
    ChatActivityGateway,
    ChatGateway,
    ClassGateway,
    ClubGateway,
    CourseGateway,
    ErrorGateway,
    EventGateway,
    ConnectGateway,
    CreateChatActivityService,
    ChatClubService,
    ChatCourseService,
    ChatTargetService,
  ],
  imports: [RestModule, GatewayServicesModule],
})
export class SocketModule {}
