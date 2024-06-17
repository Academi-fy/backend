import { Inject, Injectable } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheService } from '@/rest/CacheService';
import { Chat } from '@/@generated-types';
import { ChatDatabaseService } from '@/rest/chat/services/chat-database.service';
import { CreateChatDto, EditChatDto } from '@/rest/chat';

const cacheLifetime: number = 1000 * 60 * 3;

@Injectable()
export class ChatCacheService implements CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private chatDatabaseService: ChatDatabaseService,
  ) {}

  /**
   * @description Get all chats from cache. If not found, get them from
   * the database and store them in cache.
   *
   * @caching Chats are stored in cache with the key `chat_ids`
   * (containing all chat ids for quick access to all chats) and
   * `chat_${id}` (to access specific chats by id).
   * */
  async getAllChats(): Promise<Chat[]> {
    let chatIds: string[] = await this.cacheManager.get('chat_ids');
    let chats: Chat[] = [];

    /** If the chat ids are not found in cache, get them from the database
     and store them in cache */
    if (!chatIds) {
      chats = await this.chatDatabaseService.getAllChats();
      chatIds = chats
        .sort((a: Chat, b: Chat) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((chat: Chat) => chat.id);

      await this.cacheManager.set('chat_ids', chatIds, cacheLifetime);

      return chats;
    }

    /** Now create single entries in the cache for every chat found in
     * cache/the database  */
    for (const id of chatIds) {
      let currentChat: Chat = await this.cacheManager.get(`chat_${id}`);
      if (!currentChat) {
        currentChat = await this.chatDatabaseService.getChatById(id);
        await this.cacheManager.set(`chat_${id}`, currentChat, cacheLifetime);
      }
      chats.push(currentChat);
    }

    return chats;
  }

  /**
   * @description Get a specific chat by id from cache. If not found, get
   * it from the database and store it in cache.
   *
   * @caching Chats are stored in cache with the key `chat_ids`
   * (containing all chat ids for quick access to all chats) and
   * `chat_${id}` (to access specific chats by id).
   * */
  async getChatById(chatId: string): Promise<Chat> {
    let chat: Chat = await this.cacheManager.get(`chat_${chatId}`);

    let chatIds: string[] = await this.cacheManager.get('chat_ids');

    if (!chat) {
      /** If the chat is not found in cache, get it from the database
       and store it in cache*/
      chat = await this.chatDatabaseService.getChatById(chatId);
      await this.cacheManager.set(`chat_${chatId}`, chat, cacheLifetime);

      /** If the chat's id is not found in the ids list (or the list doesn't exist,
       then create it) add it to the list */
      if (!chatIds || !chatIds.includes(chatId)) {
        if (!chatIds) chatIds = [];
        chatIds.push(chatId);
        await this.cacheManager.set('chat_ids', chatIds, cacheLifetime);
      }
    }
    return chat;
  }

  /**
   * @description Create a new chat and update the cache.
   *
   * @param dto The data transfer object (dto) to create the chat.
   *
   * @caching Chat are stored in cache with the key `chat_ids`
   * (containing all chat ids for quick access to all chat) and
   * `chat_${id}` (to access specific chats by id).
   * */
  async createChat(dto: CreateChatDto): Promise<Chat> {
    const chat: Chat = await this.chatDatabaseService.createChat(dto);
    await this.cacheManager.set(`chat_${chat.id}`, chat, cacheLifetime);

    let chatIds: string[] = await this.cacheManager.get('chat_ids');
    if (!chatIds) chatIds = [];

    /** Add the new chat id to the start of the chat ids array and
     * update the cache.
     */
    chatIds.unshift(chat.id);
    await this.cacheManager.set('chat_ids', chatIds, cacheLifetime);

    await this.updateRelatedCaches(chat);
    return chat;
  }

  /**
   * @description Edit a chat by its id and update the cache.
   *
   * @param chatId The id of the chat to edit.
   * @param dto The data transfer object (dto) to edit the chat.
   *
   * @caching Chat are stored in cache with the key `chat_ids`
   * (containing all chat ids for quick access to all chat) and
   * `chat_${id}` (to access specific chat by id).
   * */
  async editChat(chatId: string, dto: EditChatDto): Promise<Chat> {
    const chat: Chat = await this.chatDatabaseService.editChat(chatId, dto);

    await this.cacheManager.set(`chat_${chat.id}`, chat, cacheLifetime);

    await this.updateRelatedCaches(chat);
    return chat;
  }

  /**
   * @description Delete a chat and remove it from cache.
   *
   * @param chatId The id of the chat to delete.
   *
   * @caching Chats are stored in cache with the key `chat_ids`
   * (containing all chat ids for quick access to all chats) and
   * `chat_${id}` (to access specific chats by id).
   * */
  async deleteChat(chatId: string): Promise<Chat> {
    const chat: Chat = await this.chatDatabaseService.deleteChat(chatId);
    await this.cacheManager.del(`chat_${chatId}`);

    let chatIds: string[] = await this.cacheManager.get('chat_ids');
    if (!chatIds) return chat;

    chatIds = chatIds.filter((id: string) => id !== chatId);
    await this.cacheManager.set('chat_ids', chatIds, cacheLifetime);

    await this.updateRelatedCaches(chat);
    return chat;
  }

  async updateRelatedCaches(chat: Chat): Promise<void> {
    for (const userChatId of chat.targets) {
      await this.cacheManager.del(`user-chat_${userChatId}`);
    }

    for (const chatActivityId of chat.activities) {
      await this.cacheManager.del(`chat-activity_${chatActivityId}`);
    }

    for (const clubId of chat.clubs) {
      await this.cacheManager.del(`club_${clubId}`);
    }
  }
}
