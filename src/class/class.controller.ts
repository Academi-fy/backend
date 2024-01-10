import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto, EditClassDto } from './dto';
import { Class } from '@prisma/client';

@Controller('classes')
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get()
  getAll(): Promise<Class[]> {
    return this.classService.getAllClasses();
  }

  @Get(':id')
  getById(@Param('id') classId: string): Promise<Class> {
    return this.classService.getClassById(classId);
  }

  @Post()
  createClass(@Body() dto: CreateClassDto): Promise<Class> {
    return this.classService.createClass(dto);
  }

  @Patch(':id')
  updateClass(
    @Param() classId: string,
    @Body() dto: EditClassDto,
  ): Promise<Class> {
    return this.classService.editClass(classId, dto);
  }

  @Delete(':id')
  deleteClass(@Param() classId: string): Promise<boolean> {
    return this.classService.deleteClass(classId);
  }
}
