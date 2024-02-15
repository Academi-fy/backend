import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '../../@generated-types';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('user') createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Mutation(() => User)
  async editUser(
    @Args('id') id: string,
    @Args('user') editUserDto: EditUserDto,
  ): Promise<User> {
    return this.userService.editUser(id, editUserDto);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
