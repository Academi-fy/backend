import { Injectable } from '@nestjs/common';
import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccount } from '@prisma/client';
import { PrismaService } from '../../prisma';

@Injectable()
export class UserAccountService {
  constructor(private prisma: PrismaService) {}

  async getAllUserAccounts(): Promise<UserAccount[]> {
    return this.prisma.userAccount.findMany({});
  }

  async getUserAccountById(userAccountId: string): Promise<UserAccount> {
    return this.prisma.userAccount.findUnique({
      where: { id: userAccountId },
    });
  }

  async createUserAccount(dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.prisma.userAccount.create({
      data: {
        ...dto,
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
        ...dto,
        user: dto.user ? { connect: { id: dto.user } } : undefined,
      },
    });
  }

  async deleteUserAccount(userAccountId: string) {
    const deletedUserAccount = await this.prisma.userAccount.delete({
      where: { id: userAccountId },
    });
    return Boolean(deletedUserAccount);
  }
}
