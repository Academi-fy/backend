import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Blackboard, SortOrder } from '@/@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { BlackboardService } from './services/blackboard.service';

/**
 * @description The blackboard controller handling direct HTTP access to blackboards.
 * */

@Controller('blackboard')
export class BlackboardController {
  constructor(private blackboardService: BlackboardService) {}

  /**
   * @description Get all blackboards.
   * */
  @Get()
  getAllBlackboards(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  /**
   * @description Get a blackboard by its id.
   * */
  @Get(':id')
  getBlackboardById(@Param('id') blackboardId: string): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(blackboardId);
  }

  @Get('paginated/lastId=:lastId&limit=:limit&sort=:sort')
  getPaginatedBlackboards(
    @Param('sort') sort: SortOrder,
    @Param('limit') limit: number,
    @Param('lastId') lastId: string,
  ): Promise<Blackboard[]> {
    return this.blackboardService.getPaginatedBlackboards(sort, limit, lastId);
  }

  /**
   * @description Create a new blackboard.
   *
   * @param dto The data to create the blackboard.
   * */
  @Post()
  createBlackboard(@Body() dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(dto);
  }

  /**
   * @description Edit a blackboard.
   *
   * @param blackboardId The id of the blackboard to edit.
   * @param dto The data to edit the blackboard.
   * */
  @Patch(':id')
  editBlackboard(
    @Param('id') blackboardId: string,
    @Body() dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(blackboardId, dto);
  }

  /**
   * @description Delete a blackboard.
   *
   * @param blackboardId The id of the blackboard to delete.
   * */
  @Delete(':id')
  deleteBlackboard(@Param('id') blackboardId: string): Promise<Blackboard> {
    return this.blackboardService.deleteBlackboard(blackboardId);
  }
}
