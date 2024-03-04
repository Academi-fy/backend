import { Injectable } from '@nestjs/common';
import { School } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { schoolNesting } from './school.nesting';
import { CreateSchoolDto, EditSchoolDto } from './dto';

@Injectable()
export class SchoolService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllSchools(): Promise<School[]> {
    const schools: School[] = await this.prisma.school.findMany({
      include: {
        ...schoolNesting,
      },
    });

    if (!schools) throw new Error('No schools found');
    return schools;
  }

  async getSchoolById(schoolId: string): Promise<School> {
    const school: School = await this.prisma.school.findUnique({
      where: { id: schoolId },
      include: {
        ...schoolNesting,
      },
    });

    if (!school) throw new Error(`School '${schoolId}' not found`);
    return school;
  }

  async getSchoolByName(schoolName: string): Promise<School> {
    const school: School = await this.prisma.school.findUnique({
      where: { name: schoolName },
      include: {
        ...schoolNesting,
      },
    });

    if (!school) throw new Error(`School '${schoolName}' not found`);
    return school;
  }

  async createSchool(dto: CreateSchoolDto): Promise<School> {
    const createdSchool: School = await this.prisma.school.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...schoolNesting,
      },
    });

    if (!createdSchool) throw new Error('School not created');
    return createdSchool;
  }

  async editSchool(schoolId: string, dto: EditSchoolDto): Promise<School> {
    const modifiedSchool: School = await this.prisma.school.update({
      where: { id: schoolId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...schoolNesting,
      },
    });

    if (!modifiedSchool) throw new Error(`School '${schoolId}' not found`);
    return modifiedSchool;
  }

  async deleteSchool(schoolId: string): Promise<School> {
    const deletedSchool: School = await this.prisma.school.delete({
      where: { id: schoolId },
      include: {
        ...schoolNesting,
      },
    });

    if (!deletedSchool) throw new Error(`School '${schoolId}' not found`);
    return deletedSchool;
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
