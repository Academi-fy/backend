import { Module } from '@nestjs/common';
import { AuthModule } from './';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma';
import { GraphQLJSON } from 'graphql-type-json';
import { SocketModule } from './socket/socket.module';
import { RestModule } from './rest/rest.module';
import { ChatActivityController } from './rest/chat-activity/chat-activity.controller';

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
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RestModule,
    SocketModule,
  ],
  providers: [],
  controllers: [ChatActivityController],
})
export class AppModule {}
