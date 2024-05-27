import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Service } from '@/service';
import { RefreshToken } from '@/@generated-types';

@Injectable()
export class RefreshTokenService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getRefreshTokenById(tokenId: string) {
    return this.prisma.refreshToken.findUnique({
      where: {
        id: tokenId,
      },
    });
  }

  async createRefreshToken(
    userAccountId: string,
    refreshToken: string,
    expiresAt: Date,
  ): Promise<RefreshToken> {
    return this.prisma.refreshToken.create({
      data: {
        userAccount: this.connectSingle(userAccountId),
        token: refreshToken,
        expiresAt,
      },
    });
  }

  async deleteRefreshToken(tokenId: string): Promise<void> {
    await this.prisma.refreshToken.delete({
      where: {
        id: tokenId,
      },
    });
  }
}
