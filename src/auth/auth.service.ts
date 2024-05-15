import * as argon from 'argon2';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, UserAccount } from '@prisma/client';

import { AuthDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { UserAccountService } from '@/rest/user-account/user-account.service';

@Injectable()
export class AuthService {
  constructor(
    private userAccountService: UserAccountService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    let userAccount: UserAccount;
    try {
      const hashedPassword = await argon.hash(dto.password);
      userAccount = await this.userAccountService.createUserAccount({
        username: dto.username,
        password: hashedPassword,
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

  /**
   * @description To sign in, an object containing username and password must
   * be provided.
   * The provided password must already be hashed by the client. It is then
   * verified and compared to the hashed password in the database through the
   * argon2 hashing algorithm.
   *
   * @hashing Passwords are hashed by the client prior to being transmitted to
   * this backend server. The received passwords are then hashed again to be
   * stored in the database.
   * */
  async signin(dto: AuthDto): Promise<string> {
    const userAccount = await this.userAccountService.getUserAccountByUsername(
      dto.username,
    );

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

  async signToken(userAccountId: string, username: string): Promise<string> {
    const payload = { sub: userAccountId, username };

    return await this.jwt.signAsync(payload, {
      expiresIn: '90d',
      secret: this.config.get('JWT_SECRET'),
    });
  }
}
