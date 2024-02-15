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
import { Class } from '@/@generated-types';

import { CreateClassDto, EditClassDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { ClassService } from './class.service';

@UseGuards(JwtGuard)
@Controller('classes')
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get()
  async getAllClasses(): Promise<Class[]> {
    return this.classService.getAllClasses();
  }

  @Get(':id')
  async getClassById(@Param('id') classId: string): Promise<Class> {
    return this.classService.getClassById(classId);
  }

  @Post()
  async createClass(@Body() dto: CreateClassDto): Promise<Class> {
    return this.classService.createClass(dto);
  }

  @Patch(':id')
  async updateClass(
    @Param() classId: string,
    @Body() dto: EditClassDto,
  ): Promise<Class> {
    return this.classService.editClass(classId, dto);
  }

  @Delete(':id')
  async deleteClass(@Param() classId: string): Promise<Class> {
    return this.classService.deleteClass(classId);
  }
}
