import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlackboardService } from './blackboard.service';
import { Blackboard } from '../../@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';

@Resolver(() => Blackboard)
export class BlackboardResolver {
  constructor(private blackboardService: BlackboardService) {}

  @Query(() => [Blackboard])
  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  @Query(() => Blackboard)
  async getBlackboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(id);
  }

  @Mutation(() => Blackboard)
  async createBlackboard(
    @Args('createBlackboardDto') createBlackboardDto: CreateBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(createBlackboardDto);
  }

  @Mutation(() => Blackboard)
  async updateBlackboard(
    @Args('id', { type: () => String }) id: string,
    @Args('editBlackboardDto') editBlackboardDto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(id, editBlackboardDto);
  }

  @Mutation(() => Blackboard)
  async deleteBlackboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<boolean> {
    return this.blackboardService.deleteBlackboard(id);
  }
}
