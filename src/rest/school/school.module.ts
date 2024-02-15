import { Module } from '@nestjs/common';

import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { SchoolResolver } from './school.resolver';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, SchoolResolver],
  exports: [SchoolService],
})
export class SchoolModule {}
