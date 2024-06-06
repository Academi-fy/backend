import { Module } from '@nestjs/common';

import { BlackboardModule } from './blackboard/blackboard.module';
import { BlackboardTagModule } from './blackboard-tag/blackboard-tag.module';
import { ChatModule } from './chat/chat.module';
import { ClassModule } from './class/class.module';
import { ClubModule } from './club/club.module';
import { ClubTagModule } from './club-tag/club-tag.module';
import { CourseModule } from './course/course.module';
import { EventModule } from './event/event.module';
import { EventTicketModule } from './event-ticket/event-ticket.module';
import { GradeModule } from './grade/grade.module';
import { SchoolModule } from './school/school.module';
import { SetupAccountModule } from './setup-account/setup-account.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';
import { UserAccountModule } from '@/authentication/entities/user-account/user-account.module';
import { UserChatModule } from './user-chat/user-chat.module';
import { ChatActivityModule } from './chat-activity/chat-activity.module';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [
    BlackboardModule,
    BlackboardTagModule,
    ChatModule,
    ChatActivityModule,
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
  providers: [],
  exports: [
    BlackboardModule,
    BlackboardTagModule,
    ChatModule,
    ChatActivityModule,
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
