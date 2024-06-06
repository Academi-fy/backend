import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Subject } from '@/@generated-types';

import { CreateSubjectDto } from './dto';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  async getAllSubjects(): Promise<Subject[]> {
    return await this.subjectService.getAllSubjects();
  }

  @Get(':id')
  async getSubjectById(@Param('id') id: string): Promise<Subject> {
    return await this.subjectService.getSubjectById(id);
  }

  @Post()
  async createSubject(@Body() dto: CreateSubjectDto): Promise<Subject> {
    return await this.subjectService.createSubject(dto);
  }

  @Patch(':id')
  async editSubject(
    @Param('id') id: string,
    @Body() dto: CreateSubjectDto,
  ): Promise<Subject> {
    return await this.subjectService.editSubject(id, dto);
  }

  @Delete(':id')
  async deleteSubject(@Param('id') id: string): Promise<Subject> {
    return await this.subjectService.deleteSubject(id);
  }
}
