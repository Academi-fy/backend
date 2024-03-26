import { Module } from '@nestjs/common';

import { BlackboardTagController } from './blackboard-tag.controller';
import { BlackboardTagService } from './services/blackboard-tag.service';
import { BlackboardTagResolver } from './blackboard-tag.resolver';
import { BlackboardTagCacheService } from '@/rest/blackboard-tag/services/blackboard-tag-cache.service';
import { BlackboardTagDatabaseService } from '@/rest/blackboard-tag/services/blackboard-tag-database.service';

@Module({
  controllers: [BlackboardTagController],
  providers: [
    BlackboardTagService,
    BlackboardTagCacheService,
    BlackboardTagDatabaseService,
    BlackboardTagResolver,
  ],
})
export class BlackboardTagModule {}
