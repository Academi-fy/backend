import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../../auth/guard';
import { CourseService } from './course.service';
import { CreateCourseDto, EditCourseDto } from './dto';
import { Course } from '../../@generated-types';

@UseGuards(JwtGuard)
@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  async getCourseById(@Param('id') courseId: string): Promise<Course> {
    return this.courseService.getCourseById(courseId);
  }

  @Post()
  async createCourse(@Body() dto: CreateCourseDto): Promise<Course> {
    return this.courseService.createCourse(dto);
  }

  @Patch(':id')
  async updateCourse(
    @Param('id') courseId: string,
    @Body() dto: EditCourseDto,
  ): Promise<Course> {
    return this.courseService.editCourse(courseId, dto);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') courseId: string): Promise<Course> {
    return this.courseService.deleteCourse(courseId);
  }
}
