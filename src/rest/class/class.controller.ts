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
import { ClassService } from './class.service';
import { CreateClassDto, EditClassDto } from './dto';
import { Class } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('classes')
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get()
  async getAll(): Promise<Class[]> {
    return this.classService.getAllClasses();
  }

  @Get(':id')
  async getById(@Param('id') classId: string): Promise<Class> {
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
  async deleteClass(@Param() classId: string): Promise<boolean> {
    return this.classService.deleteClass(classId);
  }
}
