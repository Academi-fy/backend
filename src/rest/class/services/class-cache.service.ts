import { Injectable } from '@nestjs/common';
import { CacheService } from '@/rest/CacheService';
import { Class } from '@/@generated-types';

@Injectable()
export class ClassCacheService implements CacheService {
  constructor() {}

  cacheLifetime: number = 60 * 60 * 24; // 24 hours

  updateRelatedCaches(class_: Class): Promise<void> {
    return Promise.resolve(undefined);
  }
}
