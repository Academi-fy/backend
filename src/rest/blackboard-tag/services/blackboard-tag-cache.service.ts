import { Inject, Injectable } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { BlackboardTagDatabaseService } from '@/rest/blackboard-tag/services/blackboard-tag-database.service';
import { BlackboardTag } from '@/@generated-types';
import {
  CreateBlackboardTagDto,
  EditBlackboardTagDto,
} from '@/rest/blackboard-tag';
import { CacheService } from '@/rest/CacheService';

const cacheLifetime: number = 1000 * 60 * 5;

@Injectable()
export class BlackboardTagCacheService implements CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private blackboardTagDatabaseService: BlackboardTagDatabaseService,
  ) {}

  /**
   * @description Get all blackboard tags from cache. If not found, get them from
   * the database and store them in cache.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    let blackboardTagIds: string[] =
      await this.cacheManager.get('blackboard-tag_ids');
    let blackboardTags: BlackboardTag[] = [];

    /** If the blackboard tag ids are not found in cache, get them from the database
    and store them in cache */
    if (!blackboardTagIds) {
      blackboardTags =
        await this.blackboardTagDatabaseService.getAllBlackboardTags();
      blackboardTagIds = blackboardTags
        .sort((a: BlackboardTag, b: BlackboardTag) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((blackboardTag: BlackboardTag) => blackboardTag.id);

      await this.cacheManager.set(
        'blackboard-tag_ids',
        blackboardTagIds,
        cacheLifetime,
      );

      return blackboardTags;
    }

    /** Now create single entries in the cache for every blackboard found in
     * cache/the database  */
    for (const id of blackboardTagIds) {
      let currentBlackboardTag: BlackboardTag = await this.cacheManager.get(
        `blackboard-tag_${id}`,
      );
      if (!currentBlackboardTag) {
        currentBlackboardTag =
          await this.blackboardTagDatabaseService.getBlackboardTagById(id);
        await this.cacheManager.set(
          `blackboard-tag_${id}`,
          currentBlackboardTag,
          cacheLifetime,
        );
      }
      blackboardTags.push(currentBlackboardTag);
    }
    return blackboardTags;
  }

  /**
   * @description Get a specific blackboard tag by id from cache. If not found, get
   * it from the database and store it in cache.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async getBlackboardTagById(blackboardTagId: string): Promise<BlackboardTag> {
    let blackboardTag: BlackboardTag = await this.cacheManager.get(
      `blackboard-tag_${blackboardTagId}`,
    );

    let blackboardTagIds: string[] =
      await this.cacheManager.get('blackboard-tag_ids');

    if (!blackboardTag) {
      /** If the blackboard tag is not found in cache, get it from the database
      and store it in cache*/
      blackboardTag =
        await this.blackboardTagDatabaseService.getBlackboardTagById(
          blackboardTagId,
        );
      await this.cacheManager.set(
        `blackboard-tag_${blackboardTagId}`,
        blackboardTag,
        cacheLifetime,
      );

      /** If the tag's id is not found in the ids list (or the list doesn't exist,
      then create it) add it to the list */
      if (!blackboardTagIds || !blackboardTagIds.includes(blackboardTagId)) {
        if (!blackboardTagIds) blackboardTagIds = [];
        blackboardTagIds.push(blackboardTagId);
        await this.cacheManager.set(
          'blackboard-tag_ids',
          blackboardTagIds,
          cacheLifetime,
        );
      }
    }
    return blackboardTag;
  }

  /**
   * @description Get a specific blackboard tag by its name from cache. If not found, get
   * it from the database and store it in cache.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async getBlackboardTagByTag(tagName: string): Promise<BlackboardTag> {
    const blackboardTags: BlackboardTag[] = await this.getAllBlackboardTags();
    let blackboardTag: BlackboardTag = blackboardTags.find(
      (blackboardTag: BlackboardTag) => blackboardTag.name === tagName,
    );

    let blackboardTagIds: string[] =
      await this.cacheManager.get('blackboard-tag_ids');

    if (!blackboardTag) {
      blackboardTag =
        await this.blackboardTagDatabaseService.getBlackboardTagByTag(tagName);
      await this.cacheManager.set(
        `blackboard-tag_${blackboardTag.id}`,
        blackboardTag,
        cacheLifetime,
      );

      /** If the blackboard tag's id is not found in the ids list (or the list
       * doesn't exist, then create it), add it to the list and update the cache.  */
      if (!blackboardTagIds || !blackboardTagIds.includes(blackboardTag.id)) {
        if (!blackboardTagIds) blackboardTagIds = [];
        blackboardTagIds.push(blackboardTag.id);
        await this.cacheManager.set(
          'blackboard-tag_ids',
          blackboardTagIds,
          cacheLifetime,
        );
      }
    }

    return blackboardTag;
  }

  /**
   * @description Create a new blackboard tag and update the cache.
   *
   * @param dto The data transfer object (dto) to create the blackboard tag.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async createBlackboardTag(
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    const blackboardTag: BlackboardTag =
      await this.blackboardTagDatabaseService.createBlackboardTag(dto);
    await this.cacheManager.set(
      `blackboard-tag_${blackboardTag.id}`,
      blackboardTag,
      cacheLifetime,
    );

    let blackboardTagIds: string[] =
      await this.cacheManager.get('blackboard-tag_ids');
    if (!blackboardTagIds) blackboardTagIds = [];

    /** Add the new blackboard id to the start of the blackboard ids array and
     * update the cache.
     */
    blackboardTagIds.unshift(blackboardTag.id);
    await this.cacheManager.set(
      'blackboard-tag_ids',
      blackboardTagIds,
      cacheLifetime,
    );

    await this.updateRelatedCaches(blackboardTag);
    return blackboardTag;
  }

  /**
   * @description Edit a blackboard tag by its id and update the cache.
   *
   * @param blackboardTagId The id of the blackboard tag to edit.
   * @param dto The data transfer object (dto) to edit the blackboard tag.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async editBlackboardTagById(
    blackboardTagId: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    const blackboardTag: BlackboardTag =
      await this.blackboardTagDatabaseService.editBlackboardTagById(
        blackboardTagId,
        dto,
      );

    return this.submitEditBlackboardTag(blackboardTag);
  }

  /**
   * @description Edit a blackboard tag by its name and update the cache.
   *
   * @param tagName The name of the blackboard tag to edit.
   * @param dto The data transfer object (dto) to edit the blackboard tag.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async editBlackboardTagByTag(
    tagName: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    const blackboardTag: BlackboardTag =
      await this.blackboardTagDatabaseService.editBlackboardTagById(
        tagName,
        dto,
      );

    return this.submitEditBlackboardTag(blackboardTag);
  }

  /**
   * @description Submit the edited blackboard tag to the cache and update all
   * related caches.
   * */
  private async submitEditBlackboardTag(
    blackboardTag: BlackboardTag,
  ): Promise<BlackboardTag> {
    await this.cacheManager.set(
      `blackboard_${blackboardTag.id}`,
      blackboardTag,
      cacheLifetime,
    );

    await this.updateRelatedCaches(blackboardTag);
    return blackboardTag;
  }

  /**
   * @description Delete a blackboard tag by its id and update the cache.
   *
   * @param blackboardTagId The id of the blackboard tag to delete.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async deleteBlackboardTagById(
    blackboardTagId: string,
  ): Promise<BlackboardTag> {
    const blackboardTag: BlackboardTag =
      await this.blackboardTagDatabaseService.deleteBlackboardTagById(
        blackboardTagId,
      );

    return this.submitDeleteBlackboardTag(blackboardTag);
  }

  /**
   * @description Delete a blackboard tag by its name and update the cache.
   *
   * @param tag The name of the blackboard tag to delete.
   *
   * @caching Blackboard Tags are stored in cache with the key `blackboard-tag_ids`
   * (containing all blackboard tag ids for quick access to all blackboard tags) and
   * `blackboard-tag_${id}` (to access specific blackboard tags by id).
   * */
  async deleteBlackboardTagByTag(tag: string): Promise<BlackboardTag> {
    const blackboardTag: BlackboardTag =
      await this.blackboardTagDatabaseService.deleteBlackboardTagByTag(tag);

    return this.submitDeleteBlackboardTag(blackboardTag);
  }

  /**
   * @description Submit the deleted blackboard tag to the cache and update all
   * related caches.
   * */
  private async submitDeleteBlackboardTag(
    blackboardTag: BlackboardTag,
  ): Promise<BlackboardTag> {
    await this.cacheManager.del(`blackboard-tag_${blackboardTag.id}`);

    let blackboardTagIds: string[] =
      await this.cacheManager.get('blackboard-tag_ids');
    if (!blackboardTagIds) return blackboardTag;

    blackboardTagIds = blackboardTagIds.filter(
      (id: string) => id !== blackboardTag.id,
    );
    await this.cacheManager.set(
      'blackboard-tag_ids',
      blackboardTagIds,
      cacheLifetime,
    );

    await this.updateRelatedCaches(blackboardTag);
    return blackboardTag;
  }

  /**
   * @description Invalidate all cached objects related to a blackboard. This
   * includes the authors, school, tags and targets.
   *
   * @param blackboardTag The blackboard to update the caches for.
   * */
  async updateRelatedCaches(blackboardTag: BlackboardTag): Promise<void> {
    for (const blackboard of blackboardTag.blackboards) {
      await this.cacheManager.del(`blackboard_${blackboard.id}`);
    }
  }
}
