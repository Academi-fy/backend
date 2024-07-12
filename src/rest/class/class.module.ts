import { Module } from '@nestjs/common';

import { ClassDatabaseService } from './services/class-database.service';
import { ClassResolver } from './class.resolver';
import { ClassController } from './class.controller';

@Module({
  providers: [ClassDatabaseService, ClassResolver],
  controllers: [ClassController],
  exports: [ClassDatabaseService],
})
export class ClassModule {}
