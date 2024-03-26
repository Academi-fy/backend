interface MinimalCachedEntity {
  id: string;
  [key: string]: any;
}

export interface CacheService {
  updateRelatedCaches(object: MinimalCachedEntity): Promise<void>;
}
