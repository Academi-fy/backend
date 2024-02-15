import { Module } from '@nestjs/common';

import { SetupAccountService } from './setup-account.service';
import { SetupAccountController } from './setup-account.controller';
import { SetupAccountResolver } from './setup-account.resolver';

@Module({
  providers: [SetupAccountService, SetupAccountResolver],
  controllers: [SetupAccountController],
})
export class SetupAccountModule {}
