import { Injectable } from '@nestjs/common';

import { Blackboard, SortOrder } from '@/@generated-types';
import { Service } from '@/service';
import { CreateBlackboardDto, EditBlackboardDto } from '../dto';
import { BlackboardCacheService } from '@/rest/blackboard/services/blackboard-cache.service';

@Injectable()
export class BlackboardService extends Service {
  constructor(private cacheService: BlackboardCacheService) {
    super();
  }

  /**
   * @description Get all blackboards from cache module.
   * */
  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.cacheService.getAllBlackboards();
  }

  /**
   * @description Get a blackboard by its id.
   * */
  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    return this.cacheService.getUniqueBlackboard(blackboardId);
  }

  /**
   * @description Get the last blackboards from cache module.
   *
   * @param sort The sort order of the blackboards.
   * @param limit The number of blackboards to return.
   * @param lastId The id of the last blackboard to start from.
   * */
  async getLastBlackboards(
    sort: SortOrder,
    limit: number,
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.cacheService.getLastBlackboards(sort, limit, lastId);
  }

  /**
   * @description Create a new blackboard using the cache module.
   *
   * @param dto The data to create the blackboard.
   * */
  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.cacheService.createBlackboard(dto);
  }

  /**
   * @description Edit a blackboard using the cache module.
   *
   * @param blackboardId The id of the blackboard to edit.
   * @param dto The data to edit the blackboard.
   * */
  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.cacheService.editBlackboard(blackboardId, dto);
  }

  /**
   * @description Delete a blackboard using the cache module.
   *
   * @param blackboardId The id of the blackboard to delete.
   * */
  async deleteBlackboard(blackboardId: string): Promise<Blackboard> {
    return this.cacheService.deleteBlackboard(blackboardId);
  }
}
