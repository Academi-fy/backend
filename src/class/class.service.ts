import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async getAllClasses() {
    return this.prisma.class.findMany({});
  }

  async getClassById(classId: string) {
    return this.prisma.class.findUnique({
      where: { id: classId },
    });
  }

  async createClass(dto: CreateClassDto) {
    return this.prisma.class.create({
      data: {
        ...dto,
        grade: { connect: { id: dto.grade } },
        school: { connect: { id: dto.school } },
      },
    });
  }

  async editClass(classId: string, dto: CreateClassDto) {
    return this.prisma.class.update({
      where: { id: classId },
      data: {
        ...dto,
        grade: dto.grade ? { connect: { id: dto.grade } } : undefined,
        school: dto.school ? { connect: { id: dto.school } } : undefined,
      },
    });
  }

  async deleteClass(classId: string) {
    const deletedClass = await this.prisma.class.delete({
      where: { id: classId },
    });
    return Boolean(deletedClass);
  }
}
