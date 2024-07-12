interface CachedEntity {
  id: string;
  [key: string]: any;
}

export interface CacheService {
  cacheLifetime: number;
  updateRelatedCaches(object: CachedEntity): Promise<void>;
}
