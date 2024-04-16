import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ChatActivity } from '@/@generated-types';
import { ChatActivityService } from './chat-activity.service';
import { CreateChatActivityDto, EditChatActivityDto } from './dto';

@Resolver(() => ChatActivity)
export class ChatActivityResolver {
  constructor(private chatActivityService: ChatActivityService) {}

  @Query(() => [ChatActivity])
  async getAllChatActivities(): Promise<ChatActivity[]> {
    return this.chatActivityService.getAllChatActivities();
  }

  @Query(() => ChatActivity)
  async getChatActivity(@Args('id') id: string): Promise<ChatActivity> {
    return this.chatActivityService.getChatActivityById(id);
  }

  @Mutation(() => ChatActivity)
  async createChatActivity(
    @Args('chatActivity') chatActivity: CreateChatActivityDto<any>,
  ): Promise<ChatActivity> {
    return this.chatActivityService.processCreateChatActivity(chatActivity);
  }

  @Mutation(() => ChatActivity)
  async editChatActivity(
    @Args('id') id: string,
    @Args('chatActivity') chatActivity: EditChatActivityDto<any>,
  ): Promise<ChatActivity> {
    return this.chatActivityService.editChatActivity(id, chatActivity);
  }

  @Mutation(() => ChatActivity)
  async deleteChatActivity(@Args('id') id: string): Promise<ChatActivity> {
    return this.chatActivityService.deleteChatActivity(id);
  }
}
