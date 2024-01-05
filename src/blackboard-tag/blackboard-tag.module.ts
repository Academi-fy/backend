import { Module } from '@nestjs/common';
import { BlackboardTagController } from './blackboard-tag.controller';
import { BlackboardTagService } from './blackboard-tag.service';

@Module({
  controllers: [BlackboardTagController],
  providers: [BlackboardTagService],
})
export class BlackboardTagModule {}
