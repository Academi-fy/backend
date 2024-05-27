import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserAccount } from '@/@generated-types';

import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccountService } from './user-account.service';

@Controller('user-accounts')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Get()
  getAllUserAccounts(): Promise<UserAccount[]> {
    return this.userAccountService.getAllUserAccounts();
  }

  @Get(':id')
  getUserAccountById(@Param('id') userAccountId: string): Promise<UserAccount> {
    return this.userAccountService.getUserAccountById(userAccountId);
  }

  @Post()
  createUserAccount(@Body() dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.userAccountService.createUserAccount(dto);
  }

  @Patch(':id')
  editUserAccount(
    @Param('id') userAccountId: string,
    @Body() dto: EditUserAccountDto,
  ): Promise<UserAccount> {
    return this.userAccountService.editUserAccount(userAccountId, dto);
  }

  @Delete(':id')
  deleteUserAccount(@Param('id') userAccountId: string): Promise<UserAccount> {
    return this.userAccountService.deleteUserAccount(userAccountId);
  }
}
