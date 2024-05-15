import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserChat } from '@/@generated-types';

import { CreateUserChatDto, EditUserChatDto } from './dto';
import { UserChatService } from './user-chat.service';

@Resolver(() => UserChat)
export class UserChatResolver {
  constructor(private userChatService: UserChatService) {}

  @Query(() => [UserChat])
  async getAllUserChats(): Promise<UserChat[]> {
    return this.userChatService.getAllUserChats();
  }

  @Query(() => UserChat)
  async getUserChat(@Args('id') id: string): Promise<UserChat> {
    return this.userChatService.getUserChatById(id);
  }

  @Query(() => [UserChat])
  async getUserChatsByUser(
    @Args('userId') userId: string,
  ): Promise<UserChat[]> {
    return this.userChatService.getUserChatsByUser(userId);
  }

  @Mutation(() => UserChat)
  async createUserChat(
    @Args('userChat') createUserChatDto: CreateUserChatDto,
  ): Promise<UserChat> {
    return this.userChatService.createUserChat(createUserChatDto);
  }

  @Mutation(() => UserChat)
  async editUserChat(
    @Args('id') id: string,
    @Args('userChat') editUserChatDto: EditUserChatDto,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, editUserChatDto);
  }

  @Mutation(() => UserChat)
  async hideUserChat(
    @Args('id') id: string,
    @Args('hide') hide: boolean,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, {
      hidden: hide,
    });
  }

  @Mutation(() => UserChat)
  async pinUserChat(
    @Args('id') id: string,
    @Args('pin') pin: boolean,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, {
      pinned: pin,
    });
  }

  @Mutation(() => UserChat)
  async readUserChat(
    @Args('id') id: string,
    @Args('read') read: boolean,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, {
      read,
    });
  }

  @Mutation(() => UserChat)
  async deleteUserChat(@Args('id') id: string): Promise<UserChat> {
    return this.userChatService.deleteUserChat(id);
  }
}
