import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { Grade } from '../../@generated-types';
import { gradeNesting } from './grade.nesting';
import { Service } from '../../service';
import { CreateGradeDto, EditGradeDto } from './dto';

@Injectable()
export class GradeService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllGrades(): Promise<Grade[]> {
    return this.prisma.grade.findMany({
      include: {
        ...gradeNesting,
      },
    });
  }

  async getGradeById(id: string): Promise<Grade> {
    return this.prisma.grade.findUnique({
      where: { id },
      include: {
        ...gradeNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateGradeDto | EditGradeDto) {
    return {
      ...dto,
      classes: this.connectArray(dto.classes),
      school: this.connectSingle(dto.school),
      level: dto.level ? dto.level : undefined,
    };
  }

  async createGrade(dto: CreateGradeDto): Promise<Grade> {
    return this.prisma.grade.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...gradeNesting,
      },
    });
  }

  async editGrade(id: string, dto: EditGradeDto): Promise<Grade> {
    return this.prisma.grade.update({
      where: { id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...gradeNesting,
      },
    });
  }

  async deleteGrade(id: string): Promise<boolean> {
    const deleted = await this.prisma.grade.delete({
      where: { id },
    });
    return Boolean(deleted);
  }
}
