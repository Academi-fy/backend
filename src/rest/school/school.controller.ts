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
import { SchoolService } from './school.service';
import { School } from '@prisma/client';
import { CreateSchoolDto, EditSchoolDto } from './dto';

@UseGuards(JwtGuard)
@Controller('schools')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Get()
  getAll(): Promise<School[]> {
    return this.schoolService.getAllSchools();
  }

  @Get(':id')
  getById(id: string): Promise<School> {
    return this.schoolService.getSchoolById(id);
  }

  @Get('name/:name')
  getByName(name: string): Promise<School> {
    return this.schoolService.getSchoolByName(name);
  }

  @Post()
  createSchool(@Body() dto: CreateSchoolDto): Promise<School> {
    return this.schoolService.createSchool(dto);
  }

  @Patch(':id')
  updateSchool(
    @Param('id') schoolId: string,
    @Body() dto: EditSchoolDto,
  ): Promise<School> {
    return this.schoolService.editSchool(schoolId, dto);
  }

  @Delete(':id')
  deleteSchool(@Param('id') schoolId: string): Promise<boolean> {
    return this.schoolService.deleteSchool(schoolId);
  }
}
