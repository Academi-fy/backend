import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SortOrder } from '@/prisma';

import { Blackboard } from '@/@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { BlackboardService } from './blackboard.service';

@Resolver(() => Blackboard)
export class BlackboardResolver {
  constructor(private blackboardService: BlackboardService) {}

  @Query(() => [Blackboard])
  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  @Query(() => [Blackboard])
  async getLastBlackboards(
    @Args('sort', { type: () => SortOrder }) sort: SortOrder,
    @Args('limit') limit: number,
    @Args('lastId', { nullable: true })
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.blackboardService.getLastBlackboards(sort, limit, lastId);
  }

  @Query(() => Blackboard)
  async getBlackboard(@Args('id') id: string): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(id);
  }

  @Mutation(() => Blackboard)
  async createBlackboard(
    @Args('blackboard') createBlackboardDto: CreateBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(createBlackboardDto);
  }

  @Mutation(() => Blackboard)
  async editBlackboard(
    @Args('id') id: string,
    @Args('blackboard') editBlackboardDto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(id, editBlackboardDto);
  }

  @Mutation(() => Blackboard)
  async deleteBlackboard(@Args('id') id: string): Promise<Blackboard> {
    return this.blackboardService.deleteBlackboard(id);
  }
}
