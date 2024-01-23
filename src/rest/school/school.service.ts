import { Injectable } from '@nestjs/common';
import { CreateSchoolDto, EditSchoolDto } from './dto';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';
import { schoolNesting } from './school.nesting';
import { School } from '../../@generated-types';

@Injectable()
export class SchoolService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllSchools(): Promise<School[]> {
    return this.prisma.school.findMany({
      include: {
        ...schoolNesting,
      },
    });
  }

  async getSchoolById(schoolId: string): Promise<School> {
    return this.prisma.school.findUnique({
      where: { id: schoolId },
      include: {
        ...schoolNesting,
      },
    });
  }

  async getSchoolByName(schoolName: string): Promise<School> {
    return this.prisma.school.findUnique({
      where: { name: schoolName },
      include: {
        ...schoolNesting,
      },
    });
  }

  async createSchool(dto: CreateSchoolDto): Promise<School> {
    return this.prisma.school.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...schoolNesting,
      },
    });
  }

  async editSchool(schoolId: string, dto: EditSchoolDto): Promise<School> {
    return this.prisma.school.update({
      where: { id: schoolId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...schoolNesting,
      },
    });
  }

  async deleteSchool(schoolId: string): Promise<School> {
    return this.prisma.school.delete({
      where: { id: schoolId },
      include: {
        ...schoolNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateSchoolDto | EditSchoolDto) {
    return {
      ...dto,
      setupAccount: this.connectSingle(dto.setupAccount),
      blackboards: this.connectArray(dto.blackboards),
      classes: this.connectArray(dto.classes),
      clubs: this.connectArray(dto.clubs),
      events: this.connectArray(dto.events),
      grades: this.connectArray(dto.grades),
      members: this.connectArray(dto.members),
      subjects: this.connectArray(dto.subjects),
      name: dto.name ? dto.name : undefined,
    };
  }
}
