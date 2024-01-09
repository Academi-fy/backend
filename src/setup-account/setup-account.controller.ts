import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { SetupAccountService } from './setup-account.service';
import { SetupAccount } from '@prisma/client';
import { CreateSetupAccountDto, EditSetupAccountDto } from './dto';

@UseGuards(JwtGuard)
@Controller('setup-accounts')
export class SetupAccountController {
  constructor(private setupAccountService: SetupAccountService) {}

  @Get()
  getAll(): Promise<SetupAccount[]> {
    return this.setupAccountService.getAllSetupAccounts();
  }

  @Get(':id')
  getById(@Param('id') setupAccountId: string): Promise<SetupAccount> {
    return this.setupAccountService.getSetupAccountById(setupAccountId);
  }

  @Get('school/:schoolName')
  getBySchoolName(
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
  updateSetupAccount(
    @Param('id') setupAccountId: string,
    @Body() dto: EditSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.setupAccountService.editSetupAccount(setupAccountId, dto);
  }

  @Delete(':id')
  deleteSetupAccount(@Param('id') setupAccountId: string): Promise<boolean> {
    return this.setupAccountService.deleteSetupAccount(setupAccountId);
  }
}
