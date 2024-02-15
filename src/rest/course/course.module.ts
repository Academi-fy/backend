import { Module } from '@nestjs/common';

import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseResolver } from './course.resolver';

@Module({
  providers: [CourseService, CourseResolver],
  controllers: [CourseController],
})
export class CourseModule {}
