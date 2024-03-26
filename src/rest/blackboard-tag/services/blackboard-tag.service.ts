import { Injectable } from '@nestjs/common';
import { BlackboardTag } from '@prisma/client';

import { Service } from '@/service';
import { CreateBlackboardTagDto, EditBlackboardTagDto } from '../dto';
import { BlackboardTagCacheService } from '@/rest/blackboard-tag/services/blackboard-tag-cache.service';

@Injectable()
export class BlackboardTagService extends Service {
  constructor(
    private readonly blackboardTagCacheService: BlackboardTagCacheService,
  ) {
    super();
  }

  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.blackboardTagCacheService.getAllBlackboardTags();
  }

  async getBlackboardTagById(blackboardTagId: string): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.getBlackboardTagById(blackboardTagId);
  }

  async getBlackboardTagByTag(tagName: string): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.getBlackboardTagByTag(tagName);
  }

  async createBlackboardTag(
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.createBlackboardTag(dto);
  }

  async editBlackboardTagById(
    blackboardTagId: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.editBlackboardTagById(
      blackboardTagId,
      dto,
    );
  }

  async editBlackboardTagByTag(
    tag: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.editBlackboardTagByTag(tag, dto);
  }

  async deleteBlackboardTagById(
    blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.deleteBlackboardTagById(
      blackboardTagId,
    );
  }

  async deleteBlackboardTagByTag(tag: string): Promise<BlackboardTag> {
    return this.blackboardTagCacheService.deleteBlackboardTagByTag(tag);
  }
}
