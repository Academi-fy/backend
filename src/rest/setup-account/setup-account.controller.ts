import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetupAccount } from '@/@generated-types';

import { CreateSetupAccountDto, EditSetupAccountDto } from './dto';
import { SetupAccountService } from './setup-account.service';

@Controller('setup-accounts')
export class SetupAccountController {
  constructor(private setupAccountService: SetupAccountService) {}

  @Get()
  getAllSetupAccounts(): Promise<SetupAccount[]> {
    return this.setupAccountService.getAllSetupAccounts();
  }

  @Get(':id')
  getSetupAccountById(
    @Param('id') setupAccountId: string,
  ): Promise<SetupAccount> {
    return this.setupAccountService.getSetupAccountById(setupAccountId);
  }

  @Get('school/:schoolName')
  getSetupAccountBySchoolName(
    @Param('schoolName') schoolName: string,
  ): Promise<SetupAccount> {
    return this.setupAccountService.getSetupAccountBySchoolName(schoolName);
  }

  @Post()
  createSetupAccount(
    @Body() dto: CreateSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.setupAccountService.createSetupAccount(dto);
  }

  @Patch(':id')
  editSetupAccount(
    @Param('id') setupAccountId: string,
    @Body() dto: EditSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.setupAccountService.editSetupAccount(setupAccountId, dto);
  }

  @Delete(':id')
  deleteSetupAccount(
    @Param('id') setupAccountId: string,
  ): Promise<SetupAccount> {
    return this.setupAccountService.deleteSetupAccount(setupAccountId);
  }
}
