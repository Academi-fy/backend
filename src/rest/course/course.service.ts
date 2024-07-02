import { Injectable } from '@nestjs/common';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { clubNesting } from '../club';
import { CreateCourseDto, EditCourseDto } from './dto';
import { Course } from '@/@generated-types';

@Injectable()
export class CourseService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllCourses(): Promise<Course[]> {
    const courses: Course[] = await this.prisma.course.findMany({
      include: {
        ...clubNesting,
      },
    });
    if (!courses) throw new Error('Courses not found');

    return courses;
  }

  async getCourseById(courseId: string): Promise<Course> {
    const course: Course = await this.prisma.course.findUnique({
      where: { id: courseId },
      include: {
        ...clubNesting,
      },
    });
    if (!course) throw new Error(`Course '${courseId}' not found`);

    return course;
  }

  async createCourse(dto: CreateCourseDto): Promise<Course> {
    const newCourse: Course = await this.prisma.course.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
    if (!newCourse) throw new Error('Course could not be created');

    return newCourse;
  }

  async editCourse(courseId: string, dto: EditCourseDto): Promise<Course> {
    const modifiedCourse: Course = await this.prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
    if (!modifiedCourse)
      throw new Error(`Course '${courseId}' could not be modified`);

    return modifiedCourse;
  }

  async deleteCourse(courseId: string): Promise<Course> {
    const deletedCourse: Course = await this.prisma.course.delete({
      where: { id: courseId },
      include: {
        ...clubNesting,
      },
    });
    if (!deletedCourse)
      throw new Error(`Course '${courseId}' could not be deleted`);

    return deletedCourse;
  }

  private mapDtoToData(dto: CreateCourseDto | EditCourseDto) {
    return {
      ...dto,
      name: dto.name,
      chat: this.connectSingle(dto.chat),
      classes: this.connectArray(dto.classes),
      members: this.connectArray(dto.members),
      subject: this.connectSingle(dto.subject),
      teacher: this.connectSingle(dto.teacher),
    };
  }
}
