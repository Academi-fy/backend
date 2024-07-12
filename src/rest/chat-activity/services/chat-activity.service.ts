import { Injectable } from '@nestjs/common';
import { ChatActivityCacheService } from '@/rest/chat-activity/services/chat-activity-cache.service';
import { Service } from '@/service';
import {
  CreateChatActivityDto,
  EditChatActivityDto,
} from '@/rest/chat-activity';

@Injectable()
export class ChatActivityService extends Service {
  constructor(private chatActivityCacheService: ChatActivityCacheService) {
    super();
  }

  /**
   * @description Get all chat activities from cache. If not found, get them from
   * the database and store them in cache.
   */
  async getAllChatActivities() {
    return this.chatActivityCacheService.getAllChatActivities();
  }

  /**
   * @description Get a specific chat activity by id from cache. If not found, get
   * it from the database and store it in cache.
   */
  async getChatActivityById(id: string) {
    return this.chatActivityCacheService.getChatActivityById(id);
  }

  /**
   * @description Get all chat activities for a specific chat by chat id from cache.
   */
  getChatActivitiesByChatId(chatId: string) {
    return this.chatActivityCacheService.getChatActivitiesByChatId(chatId);
  }

  /**
   * @description Create a new chat activity and store it in cache.
   */
  async processCreateChatActivity(dto: CreateChatActivityDto<any>) {
    return this.chatActivityCacheService.processCreateChatActivity(dto);
  }

  /**
   * @description Edit an existing chat activity and update it in cache.
   */
  async editChatActivity(
    chatActivityId: string,
    dto: EditChatActivityDto<any>,
  ) {
    return this.chatActivityCacheService.editChatActivity(chatActivityId, dto);
  }

  /**
   * @description Delete a chat activity from cache.
   */
  async deleteChatActivity(chatActivityId: string) {
    return this.chatActivityCacheService.deleteChatActivity(chatActivityId);
  }
}
