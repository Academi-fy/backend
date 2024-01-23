import { Module } from '@nestjs/common';
import { BlackboardService } from './blackboard.service';
import { BlackboardController } from './blackboard.controller';
import { BlackboardResolver } from './blackboard.resolver';

@Module({
  providers: [BlackboardService, BlackboardResolver],
  controllers: [BlackboardController],
  exports: [BlackboardService],
})
export class BlackboardModule {}
