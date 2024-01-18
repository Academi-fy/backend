import { Module } from '@nestjs/common';
import { SetupAccountService } from './setup-account.service';
import { SetupAccountController } from './setup-account.controller';

@Module({
  providers: [SetupAccountService],
  controllers: [SetupAccountController],
})
export class SetupAccountModule {}
