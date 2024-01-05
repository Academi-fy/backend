import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUserAccount } from '../auth/decorator';
import { UserAccount } from '@prisma/client';
import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccountService } from './user-account.service';

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

  @Post()
  createUserAccount(@Body() dto: CreateUserAccountDto): Promise<UserAccount> {
    return this.userAccountService.createUserAccount(dto);
  }

  @Patch()
  updateUserAccount(
    @GetUserAccount('id') userId: string,
    @Body() dto: EditUserAccountDto,
  ): Promise<UserAccount> {
    return this.userAccountService.editUserAccount(userId, dto);
  }

  @Delete()
  deleteUserAccount(@GetUserAccount('id') userId: string): Promise<boolean> {
    return this.userAccountService.deleteUserAccount(userId);
  }
}
