import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { UserAccountService } from '@/rest/user-account/user-account.service';
import { RefreshToken, UserAccount } from '@/@generated-types';
import { randomBytes } from 'crypto';
import { RefreshTokenService } from '@/authentication/refresh-tokens/refresh-token.service';
import { Service } from '@/service';

@Injectable()
export class AuthService extends Service {
  constructor(
    private readonly userAccountService: UserAccountService,
    private readonly jwtService: JwtService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {
    super();
  }

  async validateUser(username: string, password: string): Promise<any> {
    if (!username) throw new Error('Username is required');
    const userAccount: UserAccount =
      await this.userAccountService.getUserAccountByUsername(username);

    if (userAccount && (await argon.verify(userAccount.password, password))) {
      delete userAccount.password;
      return userAccount;
    }
    return null;
  }

  generateJwtToken(user: any): string {
    const payload = { username: user.username, userId: user.userId };
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
    });
  }

  generateRefreshToken(
    userAccountId: string,
    expiresAt: Date,
  ): Promise<RefreshToken> {
    const token: string = randomBytes(64).toString('hex');
    return this.refreshTokenService.createRefreshToken(
      userAccountId,
      token,
      expiresAt,
    );
  }

  generateCsrfToken(): string {
    return crypto.randomUUID();
  }

  async updateRefreshToken(
    username: string,
    refreshToken: RefreshToken,
  ): Promise<void> {
    const userAccount: UserAccount =
      await this.userAccountService.getUserAccountByUsername(username);
    if (!userAccount) {
      throw new Error('User not found');
    }

    if (userAccount) {
      userAccount.refreshTokens.push(refreshToken);
      await this.userAccountService.editUserAccount(userAccount.id, {
        refreshTokens: userAccount.refreshTokens.map(
          (token: RefreshToken) => token.id,
        ),
      });
    }
  }

  async signup(username: string, password: string): Promise<UserAccount> {
    const hashedPassword: string = await argon.hash(password);
    const userAccount: UserAccount =
      await this.userAccountService.createUserAccount({
        username,
        password: hashedPassword,
      });

    delete userAccount.password;
    return userAccount;
  }
}
