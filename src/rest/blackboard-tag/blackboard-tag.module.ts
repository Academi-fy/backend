import { Module } from '@nestjs/common';

import { BlackboardTagController } from './blackboard-tag.controller';
import { BlackboardTagService } from './blackboard-tag.service';
import { BlackboardTagResolver } from './blackboard-tag.resolver';

@Module({
  controllers: [BlackboardTagController],
  providers: [BlackboardTagService, BlackboardTagResolver],
})
export class BlackboardTagModule {}
