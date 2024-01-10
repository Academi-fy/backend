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
import { JwtGuard } from '../auth/guard';
import { BlackboardService } from './blackboard.service';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { Blackboard } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('blackboard')
export class BlackboardController {
  constructor(private blackboardService: BlackboardService) {}

  @Get()
  getAll(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  @Get(':id')
  getById(@Param('id') blackboardId: string): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(blackboardId);
  }

  @Post()
  createBlackboard(@Body() dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(dto);
  }

  @Patch(':id')
  updateBlackboard(
    @Param('id') blackboardId: string,
    @Body() dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(blackboardId, dto);
  }

  @Delete(':id')
  deleteBlackboard(@Param('id') blackboardId: string): Promise<boolean> {
    return this.blackboardService.deleteBlackboard(blackboardId);
  }
}
