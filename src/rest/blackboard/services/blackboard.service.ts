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

  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.cacheService.getAllBlackboards();
  }

  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    return this.cacheService.getUniqueBlackboard(blackboardId);
  }

  async getLastBlackboards(
    sort: SortOrder,
    limit: number,
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.cacheService.getLastBlackboards(sort, limit, lastId);
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.cacheService.createBlackboard(dto);
  }

  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.cacheService.editBlackboard(blackboardId, dto);
  }

  async deleteBlackboard(blackboardId: string): Promise<Blackboard> {
    return this.cacheService.deleteBlackboard(blackboardId);
  }
}
