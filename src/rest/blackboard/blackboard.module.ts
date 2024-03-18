import { Module } from '@nestjs/common';

import { BlackboardService } from './services/blackboard.service';
import { BlackboardController } from './blackboard.controller';
import { BlackboardResolver } from './blackboard.resolver';
import { BlackboardCacheService } from '@/rest/blackboard/services/blackboard-cache.service';
import { BlackboardDatabaseService } from '@/rest/blackboard/services/blackboard-database.service';

@Module({
  providers: [
    BlackboardService,
    BlackboardCacheService,
    BlackboardDatabaseService,
    BlackboardResolver,
  ],
  controllers: [BlackboardController],
  exports: [BlackboardService],
})
export class BlackboardModule {}
