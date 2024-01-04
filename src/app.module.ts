import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserAccountModule } from './user-account/user-account.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BlackboardModule } from './blackboard/blackboard.module';

@Module({
  imports: [
    AuthModule,
    UserAccountModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BlackboardModule,
  ],
})
export class AppModule {}
