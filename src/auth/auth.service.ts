import * as argon from 'argon2';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, UserAccount } from '@prisma/client';

import { AuthDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    let userAccount: UserAccount;
    try {
      const hashedPassword = await argon.hash(dto.password);
      userAccount = await this.prisma.userAccount.create({
        data: {
          username: dto.username,
          password: hashedPassword,
        },
      });

      return this.signToken(userAccount.id, userAccount.username);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    } finally {
      if (userAccount) {
        Logger.log(`UserAccount with id ${userAccount.id} created`);
      }
    }
  }

  async signin(dto: AuthDto) {
    const userAccount = await this.prisma.userAccount.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (!userAccount) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const passwordMatches = await argon.verify(
      userAccount.password,
      dto.password,
    );

    if (!passwordMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return this.signToken(userAccount.id, userAccount.username);
  }

  async signToken(
    userAccountId: string,
    username: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userAccountId, username };

    return {
      access_token: await this.jwt.signAsync(payload, {
        expiresIn: '90d',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }
}
