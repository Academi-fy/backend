import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { Service } from '../../service';
import { CreateCourseDto, EditCourseDto } from './dto';
import { PrismaService } from '../../prisma';

@Injectable()
export class CourseService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllCourses(): Promise<Course[]> {
    return this.prisma.course.findMany({});
  }

  async getCourseById(courseId: string): Promise<Course> {
    return this.prisma.course.findUnique({
      where: { id: courseId },
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

  async createCourse(dto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({
      data: {
        ...this.mapDtoToData(dto),
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
    });
  }

  async deleteCourse(courseId: string): Promise<boolean> {
    const deleted = this.prisma.course.delete({
      where: { id: courseId },
    });

    return Boolean(deleted);
  }
}
