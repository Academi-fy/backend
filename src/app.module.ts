import { Module } from '@nestjs/common';
import {
  AuthModule,
  BlackboardModule,
  BlackboardTagModule,
  ChatModule,
  ChatService,
  ClassController,
  ClassModule,
  ClassService,
  ClubModule,
  ClubService,
  ClubTagController,
  ClubTagModule,
  ClubTagService,
  CourseModule,
  EventController,
  EventModule,
  EventService,
  EventTicketModule,
  GradeController,
  GradeModule,
  MessageController,
  MessageModule,
  MessageService,
  PrismaModule,
  SchoolController,
  SchoolModule,
  SchoolService,
  SetupAccountModule,
  SubjectController,
  SubjectModule,
  SubjectService,
  UserAccountModule,
  UserChatController,
  UserChatModule,
  UserChatService,
  UserModule,
} from './';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BlackboardService } from './blackboard/blackboard.service';
import { BlackboardTagService } from './blackboard-tag/blackboard-tag.service';
import { CourseService } from './course/course.service';
import { EventTicketService } from './event-ticket/event-ticket.service';
import { GradeService } from './grade/grade.service';
import { PrismaService } from './prisma/prisma.service';
import { SetupAccountService } from './setup-account/setup-account.service';
import { UserService } from './user/user.service';
import { UserAccountService } from './user-account/user-account.service';
import { BlackboardController } from './blackboard/blackboard.controller';
import { BlackboardTagController } from './blackboard-tag/blackboard-tag.controller';
import { ChatController } from './chat/chat.controller';
import { CourseController } from './course/course.controller';
import { EventTicketController } from './event-ticket/event-ticket.controller';
import { SetupAccountController } from './setup-account/setup-account.controller';
import { UserController } from './user/user.controller';
import { UserAccountController } from './user-account/user-account.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    UserAccountModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
    MessageModule,
    PrismaModule,
    SchoolModule,
    SetupAccountModule,
    SubjectModule,
    UserModule,
    UserAccountModule,
    UserChatModule,
  ],
  providers: [
    BlackboardService,
    BlackboardTagService,
    ChatService,
    ClassService,
    ClubService,
    ClubTagService,
    CourseService,
    EventService,
    EventTicketService,
    GradeService,
    MessageService,
    PrismaService,
    SchoolService,
    SetupAccountService,
    SubjectService,
    UserService,
    UserAccountService,
    UserChatService,
  ],
  controllers: [
    BlackboardController,
    BlackboardTagController,
    ChatController,
    ClassController,
    ClubTagController,
    CourseController,
    EventController,
    EventTicketController,
    GradeController,
    MessageController,
    SchoolController,
    SetupAccountController,
    SubjectController,
    UserController,
    UserAccountController,
    UserChatController,
  ],
})
export class AppModule {}
