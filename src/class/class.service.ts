import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto, EditClassDto } from './dto';
import { Class } from '@prisma/client';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async getAllClasses(): Promise<Class[]> {
    return this.prisma.class.findMany({});
  }

  async getClassById(classId: string): Promise<Class> {
    return this.prisma.class.findUnique({
      where: { id: classId },
    });
  }

  async createClass(dto: CreateClassDto): Promise<Class> {
    return this.prisma.class.create({
      data: {
        ...dto,
        courses: dto.courses
          ? { connect: dto.courses.map((course) => ({ id: course })) }
          : undefined,
        grade: { connect: { id: dto.grade } },
        members: dto.members
          ? { connect: dto.members.map((member) => ({ id: member })) }
          : undefined,
        school: { connect: { id: dto.school } },
      },
    });
  }

  async editClass(classId: string, dto: EditClassDto): Promise<Class> {
    return this.prisma.class.update({
      where: { id: classId },
      data: {
        ...dto,
        courses: dto.courses
          ? { connect: dto.courses.map((course) => ({ id: course })) }
          : undefined,
        grade: dto.grade ? { connect: { id: dto.grade } } : undefined,
        members: dto.members
          ? { connect: dto.members.map((member) => ({ id: member })) }
          : undefined,
        school: dto.school ? { connect: { id: dto.school } } : undefined,
      },
    });
  }

  async deleteClass(classId: string): Promise<boolean> {
    const deletedClass = await this.prisma.class.delete({
      where: { id: classId },
    });
    return Boolean(deletedClass);
  }
}
