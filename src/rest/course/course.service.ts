import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { Service } from '../../service';
import { CreateCourseDto, EditCourseDto } from './dto';
import { PrismaService } from '../../prisma';
import { clubNesting } from '../club';

@Injectable()
export class CourseService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllCourses(): Promise<Course[]> {
    return this.prisma.course.findMany({
      include: {
        ...clubNesting,
      },
    });
  }

  async getCourseById(courseId: string): Promise<Course> {
    return this.prisma.course.findUnique({
      where: { id: courseId },
      include: {
        ...clubNesting,
      },
    });
  }

  async createCourse(dto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
  }

  async editCourse(courseId: string, dto: EditCourseDto): Promise<Course> {
    return this.prisma.course.update({
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
  }

  async deleteCourse(courseId: string): Promise<Course> {
    return this.prisma.course.delete({
      where: { id: courseId },
      include: {
        ...clubNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateCourseDto | EditCourseDto) {
    return {
      ...dto,
      chat: this.connectSingle(dto.chat),
      classes: this.connectArray(dto.classes),
      members: this.connectArray(dto.members),
      subject: this.connectSingle(dto.subject),
      teacher: this.connectSingle(dto.teacher),
    };
  }
}
