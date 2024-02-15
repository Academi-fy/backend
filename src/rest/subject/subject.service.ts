import { Injectable } from '@nestjs/common';
import { Subject, SubjectType } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { subjectNesting } from './subject.nesting';
import { CreateSubjectDto, EditSubjectDto } from './dto';

@Injectable()
export class SubjectService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllSubjects(): Promise<Subject[]> {
    return this.prisma.subject.findMany({
      include: {
        ...subjectNesting,
      },
    });
  }

  async getSubjectById(id: string): Promise<Subject> {
    return this.prisma.subject.findUnique({
      where: { id },
      include: {
        ...subjectNesting,
      },
    });
  }

  async getSubjectByType(type: SubjectType): Promise<Subject> {
    return this.prisma.subject.findUnique({
      where: { type: type },
      include: {
        ...subjectNesting,
      },
    });
  }

  async createSubject(dto: CreateSubjectDto): Promise<Subject> {
    return this.prisma.subject.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...subjectNesting,
      },
    });
  }

  async editSubject(id: string, dto: EditSubjectDto): Promise<Subject> {
    return this.prisma.subject.update({
      where: { id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...subjectNesting,
      },
    });
  }

  async deleteSubject(id: string): Promise<Subject> {
    return this.prisma.subject.delete({
      where: { id },
      include: {
        ...subjectNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateSubjectDto | EditSubjectDto) {
    return {
      ...dto,
      courses: this.connectArray(dto.courses),
      school: this.connectSingle(dto.school),
      shortName: dto.shortName ? dto.shortName : undefined,
      type: dto.type ? dto.type : undefined,
    };
  }
}
