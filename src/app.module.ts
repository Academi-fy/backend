import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLJSON } from 'graphql-type-json';

import { AuthModule } from './';
import { PrismaModule } from './prisma/prisma.module';
import { RestModule } from './rest/rest.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        scalarsMap: [{ type: () => GraphQLJSON, scalar: GraphQLJSON }],
      },
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    PrismaModule,
    RestModule,
    SocketModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
