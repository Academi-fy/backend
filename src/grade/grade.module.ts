import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';

@Module({
  providers: [GradeService]
})
export class GradeModule {}
