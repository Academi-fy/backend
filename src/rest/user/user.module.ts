import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '../../prisma';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
