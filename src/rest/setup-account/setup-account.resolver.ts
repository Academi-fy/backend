import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SetupAccount } from '../../@generated-types';

import { CreateSetupAccountDto, EditSetupAccountDto } from './dto';
import { SetupAccountService } from './setup-account.service';

@Resolver(() => SetupAccount)
export class SetupAccountResolver {
  constructor(private setupAccountService: SetupAccountService) {}

  @Query(() => [SetupAccount])
  async getAllSetupAccounts(): Promise<SetupAccount[]> {
    return await this.setupAccountService.getAllSetupAccounts();
  }

  @Query(() => SetupAccount)
  async getSetupAccount(
    @Args('id') id: string,
    @Args('schoolName') schoolName: string,
  ): Promise<SetupAccount> {
    if (id) {
      return this.setupAccountService.getSetupAccountById(id);
    } else if (schoolName) {
      return this.setupAccountService.getSetupAccountBySchoolName(schoolName);
    } else throw new Error('No id or schoolName provided');
  }

  @Mutation(() => SetupAccount)
  async createSetupAccount(
    @Args('setupAccount') createSetupAccount: CreateSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.setupAccountService.createSetupAccount(createSetupAccount);
  }

  @Mutation(() => SetupAccount)
  async editSetupAccount(
    @Args('id') id: string,
    @Args('setupAccount') editSetupAccount: EditSetupAccountDto,
  ): Promise<SetupAccount> {
    return this.setupAccountService.editSetupAccount(id, editSetupAccount);
  }

  @Mutation(() => SetupAccount)
  async deleteSetupAccount(@Args('id') id: string): Promise<SetupAccount> {
    return this.setupAccountService.deleteSetupAccount(id);
  }
}
