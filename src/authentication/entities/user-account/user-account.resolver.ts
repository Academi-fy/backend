import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserAccount } from '@/@generated-types';

import { CreateUserAccountDto, EditUserAccountDto } from './dto';
import { UserAccountService } from './user-account.service';

@Resolver(() => UserAccount)
export class UserAccountResolver {
  constructor(private userAccountService: UserAccountService) {}

  @Query(() => [UserAccount])
  async getAllUserAccounts(): Promise<UserAccount[]> {
    return this.userAccountService.getAllUserAccounts();
  }

  @Query(() => UserAccount)
  async getUserAccount(
    @Args('id', { nullable: true }) id?: string,
    @Args('username', { nullable: true }) username?: string,
  ): Promise<UserAccount> {
    if (id) {
      return this.userAccountService.getUserAccountById(id);
    } else if (username) {
      return this.userAccountService.getUserAccountByUsername(username);
    } else throw new Error('No id or username provided');
  }

  @Mutation(() => UserAccount)
  async createUserAccount(
    @Args('userAccount') createUserAccountDto: CreateUserAccountDto,
  ): Promise<UserAccount> {
    return this.userAccountService.createUserAccount(createUserAccountDto);
  }

  @Mutation(() => UserAccount)
  async editUseraccount(
    @Args('id') id: string,
    @Args('userAccount') editUserAccountDto: EditUserAccountDto,
  ): Promise<UserAccount> {
    return this.userAccountService.editUserAccount(id, editUserAccountDto);
  }

  @Mutation(() => UserAccount)
  async deleteUserAccount(@Args('id') id: string): Promise<UserAccount> {
    return this.userAccountService.deleteUserAccount(id);
  }
}
