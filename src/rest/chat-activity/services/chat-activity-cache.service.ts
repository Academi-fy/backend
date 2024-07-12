import { Inject, Injectable } from '@nestjs/common';
import { ChatActivityDatabaseService } from '@/rest/chat-activity/services/chat-activity-database.service';
import { ChatActivity } from '@/@generated-types';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheService } from '@/rest/CacheService';
import {
  CreateChatActivityDto,
  EditChatActivityDto,
} from '@/rest/chat-activity';

@Injectable()
export class ChatActivityCacheService implements CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private chatActivityDatabaseService: ChatActivityDatabaseService,
  ) {}

  cacheLifetime: number = 1000 * 60 * 3;

  /**
   * @description Get all chat activities from cache. If not found, get them from
   * the database and store them in cache.
   *
   * @caching ChatActivities are stored in cache with the key `chat-activity_ids`
   * (containing all chat activity ids for quick access to all chat activities) and
   * `chat-activity_${id}` (to access specific chat activities by id).
   * */
  async getAllChatActivities(): Promise<ChatActivity[]> {
    let chatActivityIds: string[] =
      await this.cacheManager.get('chat-activity_ids');
    let chatActivities: ChatActivity[] = [];

    /** If the chat activity ids are not found in cache, get them from the database
     and store them in cache */
    if (!chatActivityIds) {
      chatActivities =
        await this.chatActivityDatabaseService.getAllChatActivities();
      chatActivityIds = chatActivities
        .sort((a: ChatActivity, b: ChatActivity) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((chatActivity: ChatActivity) => chatActivity.id);

      await this.cacheManager.set(
        'chat_ids',
        chatActivityIds,
        this.cacheLifetime,
      );

      return chatActivities;
    }

    /** Now create single entries in the cache for every chat activity found in
     * cache/the database  */
    for (const id of chatActivityIds) {
      let currentChatActivity: ChatActivity = await this.cacheManager.get(
        `chat-activity_${id}`,
      );
      if (!currentChatActivity) {
        currentChatActivity =
          await this.chatActivityDatabaseService.getChatActivityById(id);
        await this.cacheManager.set(
          `chat-activity_${id}`,
          currentChatActivity,
          this.cacheLifetime,
        );
      }
      chatActivities.push(currentChatActivity);
    }

    return chatActivities;
  }

  /**
   * @description Get a specific chat activity by id from cache. If not found, get
   * it from the database and store it in cache.
   *
   * @caching ChatActivities are stored in cache with the key `chat-activity_ids`
   * (containing all chat activity ids for quick access to all chat activities) and
   * `chat-activity_${id}` (to access specific chat activities by id).
   * */
  async getChatActivityById(chatId: string): Promise<ChatActivity> {
    let chatActivity: ChatActivity = await this.cacheManager.get(
      `chat-activity_${chatId}`,
    );

    if (!chatActivity) {
      /** If the chat activity is not found in cache, get it from the database
       and store it in cache*/
      chatActivity =
        await this.chatActivityDatabaseService.getChatActivityById(chatId);
      await this.cacheManager.set(
        `chat-activity_${chatId}`,
        chatActivity,
        this.cacheLifetime,
      );

      let chatActivityIds: string[] =
        await this.cacheManager.get('chat-activity_ids');

      /** If the chat activity's id is not found in the ids list (or the list doesn't exist,
       then create it) add it to the list */
      if (!chatActivityIds || !chatActivityIds.includes(chatId)) {
        if (!chatActivityIds) chatActivityIds = [];
        chatActivityIds.push(chatId);
        await this.cacheManager.set(
          'chat_ids',
          chatActivityIds,
          this.cacheLifetime,
        );
      }
    }
    return chatActivity;
  }

  //TODO test this function: getChatActivitiesByChatId
  async getChatActivitiesByChatId(chatId: string): Promise<ChatActivity[]> {
    let chatActivityIds: string[] = await this.cacheManager.get(
      `chat-activity_ids_for_chat_${chatId}`,
    );
    let chatActivities: ChatActivity[] = [];

    if (!chatActivityIds) {
      // Fetch from database if not found in cache
      chatActivities =
        await this.chatActivityDatabaseService.getChatActivitiesByChatId(
          chatId,
        );
      chatActivityIds = chatActivities.map((activity) => activity.id);
      // Cache the IDs for future use
      await this.cacheManager.set(
        `chat-activity_ids_for_chat_${chatId}`,
        chatActivityIds,
        this.cacheLifetime,
      );
    } else {
      // Retrieve each chat activity from cache or database
      for (const id of chatActivityIds) {
        let chatActivity: ChatActivity = await this.cacheManager.get(
          `chat-activity_${id}`,
        );
        if (!chatActivity) {
          chatActivity =
            await this.chatActivityDatabaseService.getChatActivityById(id);
          await this.cacheManager.set(
            `chat-activity_${id}`,
            chatActivity,
            this.cacheLifetime,
          );
        }
        chatActivities.push(chatActivity);
      }
    }

    return chatActivities;
  }

  /**
   * @description Create a new chat activity and update the cache.
   *
   * @param dto The data transfer object (dto) to create the chat activity.
   *
   * @caching ChatActivities are stored in cache with the key `chat-activity_ids`
   * (containing all chat activity ids for quick access to all chat activity) and
   * `chat-activity_${id}` (to access specific chat activities by id).
   * */
  async processCreateChatActivity(
    dto: CreateChatActivityDto<any>,
  ): Promise<ChatActivity> {
    const chatActivity: ChatActivity =
      await this.chatActivityDatabaseService.processCreateChatActivity(dto);
    await this.cacheManager.set(
      `chat-activity_${chatActivity.id}`,
      chatActivity,
      this.cacheLifetime,
    );

    let chatActivityIds: string[] =
      await this.cacheManager.get('chat-activity_ids');
    if (!chatActivityIds) chatActivityIds = [];

    /** Add the new chat activity id to the start of the chat activity ids array
     * and update the cache.
     */
    chatActivityIds.unshift(chatActivity.id);
    await this.cacheManager.set(
      'chat-activity_ids',
      chatActivityIds,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(chatActivity);
    return chatActivity;
  }

  /**
   * @description Edit a chat activity by its id and update the cache.
   *
   * @param chatActivityId The id of the chat activity to edit.
   * @param dto The data transfer object (dto) to edit the chat activity.
   *
   * @caching ChatActivities are stored in cache with the key `chat-activity_ids`
   * (containing all chat activity ids for quick access to all chat activities) and
   * `chat-activity_${id}` (to access specific chat activity by id).
   * */
  async editChatActivity(
    chatActivityId: string,
    dto: EditChatActivityDto<any>,
  ): Promise<ChatActivity> {
    const chatActivity: ChatActivity =
      await this.chatActivityDatabaseService.editChatActivity(
        chatActivityId,
        dto,
      );

    await this.cacheManager.set(
      `chat-activity_${chatActivity.id}`,
      chatActivity,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(chatActivity);
    return chatActivity;
  }

  /**
   * @description Delete a chat activity and remove it from cache.
   *
   * @param chatActivityId The id of the chat activity to delete.
   *
   * @caching ChatActivities are stored in cache with the key `chat-activity_ids`
   * (containing all chat activity ids for quick access to all chat activities) and
   * `chat-activity_${id}` (to access specific chat activities by id).
   * */
  async deleteChatActivity(chatActivityId: string): Promise<ChatActivity> {
    const chatActivity: ChatActivity =
      await this.chatActivityDatabaseService.deleteChatActivity(chatActivityId);
    await this.cacheManager.del(`chat-activity_${chatActivityId}`);

    let chatActivityIds: string[] =
      await this.cacheManager.get('chat-activity_ids');
    if (!chatActivityIds) return chatActivity;

    chatActivityIds = chatActivityIds.filter(
      (id: string) => id !== chatActivityId,
    );
    await this.cacheManager.set(
      'chat-activity_ids',
      chatActivityIds,
      this.cacheLifetime,
    );

    await this.updateRelatedCaches(chatActivity);
    return chatActivity;
  }

  async updateRelatedCaches(chatActivity: ChatActivity): Promise<void> {
    await this.cacheManager.del(`chat_${chatActivity.chat.id}`);

    for (const answeredActivity of chatActivity.answeredBy) {
      await this.cacheManager.del(`chat-activity_${answeredActivity.id}`);
    }

    await this.cacheManager.del(`chat-activity_${chatActivity.answerTo}`);
    await this.cacheManager.del(`user_${chatActivity.executor}`);

    for (const answeredActivity of chatActivity.readBy) {
      await this.cacheManager.del(`chat-activity_${answeredActivity.id}`);
    }
  }
}
