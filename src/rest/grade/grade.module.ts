import { Module } from '@nestjs/common';

import { GradeService } from './grade.service';
import { GradeResolver } from './grade.resolver';
import { GradeController } from './grade.controller';

@Module({
  providers: [GradeService, GradeResolver],
  controllers: [GradeController],
})
export class GradeModule {}
