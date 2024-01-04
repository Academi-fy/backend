import { Module } from '@nestjs/common';
import { BlackboardService } from './blackboard.service';
import { BlackboardController } from './blackboard.controller';

@Module({
  providers: [BlackboardService],
  controllers: [BlackboardController]
})
export class BlackboardModule {}
