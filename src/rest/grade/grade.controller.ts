import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Grade } from '@/@generated-types';

import { CreateGradeDto } from './dto';
import { GradeService } from './grade.service';

@Controller('grades')
export class GradeController {
  constructor(private gradeService: GradeService) {}

  @Get()
  async getAllGrades(): Promise<Grade[]> {
    return this.gradeService.getAllGrades();
  }

  @Get(':id')
  async getGradeById(id: string): Promise<Grade> {
    return this.gradeService.getGradeById(id);
  }

  @Post()
  async createGrade(@Body() dto: CreateGradeDto): Promise<Grade> {
    return this.gradeService.createGrade(dto);
  }

  @Patch(':id')
  async editGrade(
    @Param('id') id: string,
    @Body() dto: CreateGradeDto,
  ): Promise<Grade> {
    return this.gradeService.editGrade(id, dto);
  }

  @Delete(':id')
  async deleteGrade(@Param('id') id: string): Promise<Grade> {
    return this.gradeService.deleteGrade(id);
  }
}
