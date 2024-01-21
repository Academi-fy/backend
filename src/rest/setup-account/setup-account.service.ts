import { Injectable } from '@nestjs/common';
import { SetupAccount } from '@prisma/client';
import { CreateSetupAccountDto, EditSetupAccountDto } from './dto';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';
import { setupAccountNesting } from './setup-account.nesting';

@Injectable()
export class SetupAccountService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllSetupAccounts(): Promise<SetupAccount[]> {
    return this.prisma.setupAccount.findMany({
      include: {
        ...setupAccountNesting,
      },
    });
  }

  async getSetupAccountById(setupAccountId: string): Promise<SetupAccount> {
    return this.prisma.setupAccount.findUnique({
      where: { id: setupAccountId },
      include: {
        ...setupAccountNesting,
      },
    });
  }

  async getSetupAccountBySchoolName(schoolName: string): Promise<SetupAccount> {
    return this.prisma.setupAccount.findUnique({
      where: { schoolName: schoolName },
      include: {
        ...setupAccountNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateSetupAccountDto | EditSetupAccountDto) {
    return {
      ...dto,
      school: this.connectSingle(dto.school),
      schoolName: dto.schoolName ? dto.schoolName : undefined,
    };
  }

  async createSetupAccount(dto: CreateSetupAccountDto): Promise<SetupAccount> {
    return this.prisma.setupAccount.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...setupAccountNesting,
      },
    });
  }

  async editSetupAccount(
    setupAccountId: string,
    dto: EditSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.prisma.setupAccount.update({
      where: { id: setupAccountId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...setupAccountNesting,
      },
    });
  }

  async deleteSetupAccount(setupAccountId: string): Promise<boolean> {
    const deletedSetupAccount = await this.prisma.setupAccount.delete({
      where: { id: setupAccountId },
    });
    return Boolean(deletedSetupAccount);
  }
}
