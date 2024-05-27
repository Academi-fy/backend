import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserAccountModule } from '@/rest/user-account/user-account.module';
import { AuthController } from '@/authentication/auth.controller';
import { LocalStrategy } from '@/authentication/strategy/local.strategy';
import { AuthSerializer } from '@/authentication/auth.serializer';
import { PrismaModule } from '@/prisma/prisma.module';
import { RefreshTokenService } from '@/authentication/refresh-tokens/refresh-token.service';

@Module({
  imports: [
    UserAccountModule,
    PassportModule.register({ session: false }),
    JwtModule.register({
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    AuthSerializer,
    JwtStrategy,
    JwtService,
    RefreshTokenService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
