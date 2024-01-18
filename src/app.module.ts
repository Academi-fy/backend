import { Module } from '@nestjs/common';
import {
  AuthModule,
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
  SchoolModule,
  SetupAccountModule,
  SubjectModule,
  UserAccountModule,
  UserChatModule,
  UserModule,
} from './';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Gateway } from './socket/gateway';
import { PrismaModule } from './prisma';
import { ChatResolver } from './rest/chat/chat.resolver';

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
  providers: [Gateway, ChatResolver],
  controllers: [],
})
export class AppModule {}
