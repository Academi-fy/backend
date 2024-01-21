import { UserChatService } from './user-chat.service';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { UserChat } from '../../@generated-types';
import { CreateUserChatDto } from './dto/create-user-chat.dto';
import { EditUserChatDto } from './dto/edit-user-chat.dto';

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

  @Mutation(() => UserChat)
  async createUserChat(
    @Args('userChat') createUserChatDto: CreateUserChatDto,
  ): Promise<UserChat> {
    return this.userChatService.createUserChat(createUserChatDto);
  }

  async editUserChat(
    @Args('id') id: string,
    @Args('userChat') editUserChatDto: EditUserChatDto,
  ): Promise<UserChat> {
    return this.userChatService.editUserChat(id, editUserChatDto);
  }

  async deleteUserChat(@Args('id') id: string): Promise<boolean> {
    return this.userChatService.deleteUserChat(id);
  }
}
