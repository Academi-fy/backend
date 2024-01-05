import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccount } from '@prisma/client';

@Injectable()
export class UserAccountService {
  constructor(private prisma: PrismaService) {}

  async getAllUserAccounts(): Promise<UserAccount[]> {
    return this.prisma.userAccount.findMany({});
  }

  async createUserAccount(dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.prisma.userAccount.create({
      data: dto,
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
      },
      include: {
        user: true, //TODO check if works (if no user attribute is passed in dto)
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
