import { Module } from '@nestjs/common';

import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';
import { UserAccountResolver } from './user-account.resolver';

@Module({
  controllers: [UserAccountController],
  providers: [UserAccountService, UserAccountResolver],
  exports: [UserAccountService],
})
export class UserAccountModule {}
