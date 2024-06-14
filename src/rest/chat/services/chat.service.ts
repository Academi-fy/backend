import { Injectable } from '@nestjs/common';

import { Service } from '@/service';
import { ChatCacheService } from '@/rest/chat/services/chat-cache.service';
import { Chat } from '@/@generated-types';
import { CreateChatDto, EditChatDto } from '@/rest/chat';

@Injectable()
export class ChatService extends Service {
  constructor(private chatCacheService: ChatCacheService) {
    super();
  }

  /**
   * @description Get all chats from cache. If not found, get them from
   * the database and store them in cache.
   */
  async getAllChats(): Promise<Chat[]> {
    return this.chatCacheService.getAllChats();
  }

  /**
   * @description Get a specific chat by id from cache. If not found, get
   * it from the database and store it in cache.
   */
  async getChatById(id: string): Promise<Chat> {
    return this.chatCacheService.getChatById(id);
  }

  /**
   * @description Create a new chat and store it in cache.
   */
  async createChat(createChatDto: CreateChatDto): Promise<Chat> {
    return this.chatCacheService.createChat(createChatDto);
  }

  /**
   * @description Edit an existing chat and update it in cache.
   */
  async editChat(chatId: string, editChatDto: EditChatDto): Promise<Chat> {
    return this.chatCacheService.editChat(chatId, editChatDto);
  }

  /**
   * @description Delete a chat from cache.
   */
  async deleteChat(chatId: string): Promise<Chat> {
    return this.chatCacheService.deleteChat(chatId);
  }
}
