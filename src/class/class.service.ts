import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto, EditClassDto } from './dto';
import { Class } from '@prisma/client';
import { Service } from '../service';

@Injectable()
export class ClassService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

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
        courses: this.connectArray(dto.courses),
        grade: this.connectSingle(dto.grade),
        members: this.connectArray(dto.members),
        school: this.connectSingle(dto.school),
      },
    });
  }

  async editClass(classId: string, dto: EditClassDto): Promise<Class> {
    return this.prisma.class.update({
      where: { id: classId },
      data: {
        ...dto,
        courses: this.connectArray(dto.courses),
        grade: this.connectSingle(dto.grade),
        members: this.connectArray(dto.members),
        school: this.connectSingle(dto.school),
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
