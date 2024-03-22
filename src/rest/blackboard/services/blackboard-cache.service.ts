import { Inject, Injectable } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Blackboard, SortOrder } from '@/@generated-types';
import { BlackboardDatabaseService } from '@/rest/blackboard/services/blackboard-database.service';
import { CreateBlackboardDto, EditBlackboardDto } from '@/rest/blackboard';

@Injectable()
export class BlackboardCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private blackboardDatabaseService: BlackboardDatabaseService,
  ) {}

  async getAllBlackboards(): Promise<Blackboard[]> {
    let blackboardIds: string[] = await this.cacheManager.get('blackboard_ids');
    let blackboards: Blackboard[] = [];

    if (!blackboardIds) {
      blackboards = await this.blackboardDatabaseService.getAllBlackboards();
      blackboardIds = blackboards
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((blackboard: Blackboard) => blackboard.id);

      await this.cacheManager.set('blackboard_ids', blackboardIds, 3600);
      return blackboards;
    }

    for (const id of blackboardIds) {
      let currentBlackboard: Blackboard = await this.cacheManager.get(
        `blackboard_${id}`,
      );
      if (!currentBlackboard) {
        currentBlackboard =
          await this.blackboardDatabaseService.getUniqueBlackboard(id);
        await this.cacheManager.set(
          `blackboard_${id}`,
          currentBlackboard,
          3600,
        );
      }
      blackboards.push(currentBlackboard);
    }
    return blackboards;
  }

  async getUniqueBlackboard(id: string): Promise<Blackboard> {
    let blackboard: Blackboard = await this.cacheManager.get(
      `blackboard_${id}`,
    );
    if (!blackboard) {
      blackboard = await this.blackboardDatabaseService.getUniqueBlackboard(id);
      await this.cacheManager.set(`blackboard_${id}`, blackboard, 3600);
    }
    return blackboard;
  }

  async getLastBlackboards(
    sort: SortOrder,
    limit: number,
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.blackboardDatabaseService.getLastBlackboards(
      sort,
      limit,
      lastId,
    );
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.createBlackboard(dto);
    await this.cacheManager.set(
      `blackboard_${blackboard.id}`,
      blackboard,
      3600,
    );
    return blackboard;
  }

  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.editBlackboard(blackboardId, dto);
    await this.cacheManager.set(
      `blackboard_${blackboard.id}`,
      blackboard,
      3600,
    );
    return blackboard;
  }

  async deleteBlackboard(blackboardId: string): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.deleteBlackboard(blackboardId);
    await this.cacheManager.del(`blackboard_${blackboardId}`);
    return blackboard;
  }
}
