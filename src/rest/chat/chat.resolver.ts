import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Chat } from '../../@generated-types';
import { CreateChatDto, EditChatDto } from './dto';
import { ChatService } from './chat.service';

@Resolver(() => Chat)
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query(() => [Chat])
  async getAllChats(): Promise<Chat[]> {
    return this.chatService.getAllChats();
  }

  @Query(() => Chat)
  async getChat(@Args('id') id: string): Promise<Chat> {
    return this.chatService.getChatById(id);
  }

  @Mutation(() => Chat)
  async createChat(@Args('chat') createChatDto: CreateChatDto): Promise<Chat> {
    return this.chatService.createChat(createChatDto);
  }

  @Mutation(() => Chat)
  async editChat(
    @Args('id') id: string,
    @Args('chat') editChatDto: EditChatDto,
  ): Promise<Chat> {
    return this.chatService.editChat(id, editChatDto);
  }

  @Mutation(() => Chat)
  async deleteChat(@Args('id') id: string): Promise<Chat> {
    return this.chatService.deleteChat(id);
  }
}
