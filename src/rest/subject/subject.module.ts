import { Module } from '@nestjs/common';

import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';

@Module({
  providers: [SubjectService, SubjectResolver],
  controllers: [SubjectController],
})
export class SubjectModule {}
