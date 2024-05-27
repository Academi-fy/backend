import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { School } from '@/@generated-types';

import { CreateSchoolDto, EditSchoolDto } from './dto';
import { SchoolService } from './school.service';

@Controller('schools')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Get()
  getAllSchools(): Promise<School[]> {
    return this.schoolService.getAllSchools();
  }

  @Get(':id')
  getSchoolById(id: string): Promise<School> {
    return this.schoolService.getSchoolById(id);
  }

  @Get('name/:name')
  getSchoolByName(name: string): Promise<School> {
    return this.schoolService.getSchoolByName(name);
  }

  @Post()
  createSchool(@Body() dto: CreateSchoolDto): Promise<School> {
    return this.schoolService.createSchool(dto);
  }

  @Patch(':id')
  editSchool(
    @Param('id') schoolId: string,
    @Body() dto: EditSchoolDto,
  ): Promise<School> {
    return this.schoolService.editSchool(schoolId, dto);
  }

  @Delete(':id')
  deleteSchool(@Param('id') schoolId: string): Promise<School> {
    return this.schoolService.deleteSchool(schoolId);
  }
}
