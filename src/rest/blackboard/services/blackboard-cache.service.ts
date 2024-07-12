import { Inject, Injectable } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Blackboard, SortOrder } from '@/@generated-types';
import { BlackboardDatabaseService } from '@/rest/blackboard/services/blackboard-database.service';
import { CreateBlackboardDto, EditBlackboardDto } from '@/rest/blackboard';
import { CacheService } from '@/rest/CacheService';

@Injectable()
export class BlackboardCacheService implements CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private blackboardDatabaseService: BlackboardDatabaseService,
  ) {}

  cacheLifetime: number = 1000 * 60 * 60 * 3; //3 hrs

  /**
   * @description Get all blackboards from cache. If not found, get them from
   * the database and store them in cache.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async getAllBlackboards(): Promise<Blackboard[]> {
    let blackboardIds: string[] = await this.cacheManager.get('blackboard_ids');
    let blackboards: Blackboard[] = [];

    /** If the blackboard ids are not found in cache, get them from the database
     * and store them in cache */
    if (!blackboardIds) {
      blackboards = await this.blackboardDatabaseService.getAllBlackboards();
      blackboardIds = blackboards
        .sort((a: Blackboard, b: Blackboard) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((blackboard: Blackboard) => blackboard.id);

      await this.cacheManager.set(
        'blackboard_ids',
        blackboardIds,
        this.cacheLifetime,
      );
      return blackboards;
    }

    /** If the blackboard ids are found in cache, get the blackboards from
     * the cache and return them. */
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
          this.cacheLifetime,
        );
      }
      blackboards.push(currentBlackboard);
    }
    return blackboards;
  }

  /**
   * @description Get a specific blackboard by id from cache. If not found, get
   * it from the database and store it in cache.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async getUniqueBlackboard(id: string): Promise<Blackboard> {
    let blackboard: Blackboard = await this.cacheManager.get(
      `blackboard_${id}`,
    );

    let blackboardIds: string[] = await this.cacheManager.get('blackboard_ids');

    /** If the blackboard is not found in cache, get it from the database
     * and store it in cache */
    if (!blackboard) {
      blackboard = await this.blackboardDatabaseService.getUniqueBlackboard(id);
      await this.cacheManager.set(
        `blackboard_${id}`,
        blackboard,
        this.cacheLifetime,
      );

      if (!blackboardIds || !blackboardIds.includes(id)) {
        if (!blackboardIds) blackboardIds = [];
        blackboardIds.push(id);
        await this.cacheManager.set(
          'blackboard_ids',
          blackboardIds,
          this.cacheLifetime,
        );
      }
    }
    return blackboard;
  }

  /**
   * @description Get the last blackboards from cache. If not found, get them
   * from the database and store them in cache.
   *
   * @param sort The sort order of the blackboards.
   * @param limit The number of blackboards to return.
   * @param lastId The id of the last blackboard to start from.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async getPaginatedBlackboards(
    sort: SortOrder,
    limit: number,
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.blackboardDatabaseService.getPaginatedBlackboards(
      sort,
      limit,
      lastId,
    );
  }

  /**
   * @description Create a new blackboard and store it in cache.
   *
   * @param dto The data transfer object (dto) to create the blackboard.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.createBlackboard(dto);
    await this.cacheManager.set(
      `blackboard_${blackboard.id}`,
      blackboard,
      this.cacheLifetime,
    );

    let blackboardIds: string[] = await this.cacheManager.get('blackboard_ids');
    if (!blackboardIds) blackboardIds = [];

    /** Add the new blackboard id to the start of the blackboard ids array and
     * update the cache.
     */
    blackboardIds.unshift(blackboard.id);
    await this.cacheManager.set(
      'blackboard_ids',
      blackboardIds,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(blackboard);
    return blackboard;
  }

  /**
   * @description Edit a blackboard and update it in cache.
   *
   * @param blackboardId The id of the blackboard to edit.
   * @param dto The data transfer object (dto) to edit the blackboard.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.editBlackboard(blackboardId, dto);
    await this.cacheManager.set(
      `blackboard_${blackboard.id}`,
      blackboard,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(blackboard);
    return blackboard;
  }

  /**
   * @description Delete a blackboard and remove it from cache.
   *
   * @param blackboardId The id of the blackboard to delete.
   *
   * @caching Blackboards are stored in cache with the key `blackboard_ids`
   * (containing all blackboard ids for quick access to all blackboards) and
   * `blackboard_${id}` (to access specific blackboards by id).
   * */
  async deleteBlackboard(blackboardId: string): Promise<Blackboard> {
    const blackboard: Blackboard =
      await this.blackboardDatabaseService.deleteBlackboard(blackboardId);
    await this.cacheManager.del(`blackboard_${blackboardId}`);

    let blackboardIds: string[] = await this.cacheManager.get('blackboard_ids');
    if (!blackboardIds) return blackboard;

    blackboardIds = blackboardIds.filter((id: string) => id !== blackboardId);
    await this.cacheManager.set(
      'blackboard_ids',
      blackboardIds,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(blackboard);
    return blackboard;
  }

  /**
   * @description Invalidate all cached objects related to a blackboard. This
   * includes the authors, school, tags and targets.
   *
   * @param blackboard The blackboard to update the caches for.
   * */
  async updateRelatedCaches(blackboard: Blackboard): Promise<void> {
    for (const author of blackboard.authors) {
      await this.cacheManager.del(`user_${author.id}`);
    }

    await this.cacheManager.del(`school_${blackboard.school.id}`);

    for (const tag of blackboard.tags) {
      await this.cacheManager.del(`blackboard-tag_${tag.id}`);
    }

    for (const target of blackboard.targets) {
      await this.cacheManager.del(`user_${target.id}`);
    }
  }
}
