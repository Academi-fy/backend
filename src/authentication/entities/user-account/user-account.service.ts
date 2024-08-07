import { Injectable } from '@nestjs/common';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { userAccountNesting } from './user-account.nesting';
import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccount } from '@/@generated-types';

@Injectable()
export class UserAccountService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllUserAccounts(): Promise<UserAccount[]> {
    return this.prisma.userAccount.findMany({
      include: {
        ...userAccountNesting,
      },
    });
  }

  async getUserAccountById(userAccountId: string): Promise<UserAccount> {
    return this.prisma.userAccount.findUnique({
      where: { id: userAccountId },
      include: {
        ...userAccountNesting,
      },
    });
  }

  async getUserAccountByUsername(username: string): Promise<UserAccount> {
    return this.prisma.userAccount.findUnique({
      where: { username: username },
      include: {
        ...userAccountNesting,
      },
    });
  }

  async createUserAccount(dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.prisma.userAccount.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...userAccountNesting,
      },
    });
  }

  async editUserAccount(
    userAccountId: string,
    dto: EditUserAccountDto,
  ): Promise<UserAccount> {
    return this.prisma.userAccount.update({
      where: { id: userAccountId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...userAccountNesting,
      },
    });
  }

  async deleteUserAccount(userAccountId: string) {
    return this.prisma.userAccount.delete({
      where: { id: userAccountId },
      include: {
        ...userAccountNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateUserAccountDto | EditUserAccountDto) {
    return {
      ...dto,
      user: dto.user ? { connect: { id: dto.user } } : undefined,
      password: dto.password,
      username: dto.username,
      refreshTokens: this.connectArray(dto.refreshTokens),
    };
  }
}
