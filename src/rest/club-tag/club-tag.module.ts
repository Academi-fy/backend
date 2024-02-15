import { Module } from '@nestjs/common';

import { ClubTagController } from './club-tag.controller';
import { ClubTagService } from './club-tag.service';
import { ClubTagResolver } from './club-tag.resolver';

@Module({
  controllers: [ClubTagController],
  providers: [ClubTagService, ClubTagResolver],
})
export class ClubTagModule {}
