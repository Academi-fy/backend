import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../../auth/guard';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto';
import { Grade } from '../../@generated-types';

@UseGuards(JwtGuard)
@Controller('grades')
export class GradeController {
  constructor(private gradeService: GradeService) {}

  @Get()
  async getAll(): Promise<Grade[]> {
    return this.gradeService.getAllGrades();
  }

  @Get(':id')
  async getById(id: string): Promise<Grade> {
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
  async deleteGrade(@Param('id') id: string): Promise<boolean> {
    return this.gradeService.deleteGrade(id);
  }
}
