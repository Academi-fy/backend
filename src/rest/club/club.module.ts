import { Module } from '@nestjs/common';

import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { ClubResolver } from './club.resolver';

@Module({
  controllers: [ClubController],
  providers: [ClubService, ClubResolver],
  exports: [ClubService],
})
export class ClubModule {}
