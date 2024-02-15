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

import { Blackboard } from '../../@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { JwtGuard } from '../../auth/guard';
import { BlackboardService } from './blackboard.service';

@UseGuards(JwtGuard)
@Controller('blackboard')
export class BlackboardController {
  constructor(private blackboardService: BlackboardService) {}

  @Get()
  getAllBlackboards(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  @Get(':id')
  getBlackboardById(@Param('id') blackboardId: string): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(blackboardId);
  }

  @Post()
  createBlackboard(@Body() dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(dto);
  }

  @Patch(':id')
  editBlackboard(
    @Param('id') blackboardId: string,
    @Body() dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(blackboardId, dto);
  }

  @Delete(':id')
  deleteBlackboard(@Param('id') blackboardId: string): Promise<Blackboard> {
    return this.blackboardService.deleteBlackboard(blackboardId);
  }
}
