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
import { GraphQLJSON } from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        scalarsMap: [{ type: () => GraphQLJSON, scalar: GraphQLJSON }],
      },
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
  providers: [Gateway],
  controllers: [],
})
export class AppModule {}
