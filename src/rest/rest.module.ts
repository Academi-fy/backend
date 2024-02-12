import { Module } from '@nestjs/common';
import { BlackboardModule } from './blackboard';
import { BlackboardTagModule } from './blackboard-tag';
import { ChatModule } from './chat';
import { ClassModule } from './class';
import { ClubModule } from './club';
import { ClubTagModule } from './club-tag';
import { CourseModule } from './course';
import { EventModule } from './event';
import { EventTicketModule } from './event-ticket';
import { GradeModule } from './grade';
import { PrismaModule } from '../prisma';
import { SchoolModule } from './school';
import { SetupAccountModule } from './setup-account';
import { SubjectModule } from './subject';
import { UserModule } from './user';
import { UserAccountModule } from './user-account';
import { UserChatModule } from './user-chat';

@Module({
  imports: [
    BlackboardModule,
    BlackboardTagModule,
    ChatModule,
    ClassModule,
    ClubModule,
    ClubTagModule,
    CourseModule,
    EventModule,
    EventTicketModule,
    GradeModule,
    PrismaModule,
    SchoolModule,
    SetupAccountModule,
    SubjectModule,
    UserModule,
    UserAccountModule,
    UserChatModule,
  ],
})
export class RestModule {}
