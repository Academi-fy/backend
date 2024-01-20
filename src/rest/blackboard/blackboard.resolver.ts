import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlackboardService } from './blackboard.service';
import { Blackboard } from '../../@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { SortOrder } from '../../prisma';

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
    @Args('limit', { type: () => Number }) limit: number,
    @Args('lastId', { type: () => String, nullable: true })
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.blackboardService.getLastBlackboards(sort, limit, lastId);
  }

  @Query(() => Blackboard)
  async getBlackboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Blackboard> {
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
    @Args('id', { type: () => String }) id: string,
    @Args('blackboard') editBlackboardDto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(id, editBlackboardDto);
  }

  @Mutation(() => Boolean)
  async deleteBlackboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<boolean> {
    return this.blackboardService.deleteBlackboard(id);
  }
}
