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
import { JwtGuard } from '../../auth/guard';
import { UserAccount } from '@prisma/client';
import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccountService } from './user-account.service';
import { GetUserAccount } from '../../auth/decorator';

@UseGuards(JwtGuard)
@Controller('user-accounts')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Get('me')
  getMe(@GetUserAccount() user: UserAccount): UserAccount {
    return user;
  }

  @Get()
  getAll(): Promise<UserAccount[]> {
    return this.userAccountService.getAllUserAccounts();
  }

  @Get(':id')
  getById(@Param('id') userAccountId: string): Promise<UserAccount> {
    return this.userAccountService.getUserAccountById(userAccountId);
  }

  @Post()
  createUserAccount(@Body() dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.userAccountService.createUserAccount(dto);
  }

  @Patch(':id')
  updateUserAccount(
    @Param('id') userAccountId: string,
    @Body() dto: EditUserAccountDto,
  ): Promise<UserAccount> {
    return this.userAccountService.editUserAccount(userAccountId, dto);
  }

  @Delete(':id')
  deleteUserAccount(@Param('id') userAccountId: string): Promise<boolean> {
    return this.userAccountService.deleteUserAccount(userAccountId);
  }
}
