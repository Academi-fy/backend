import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Blackboard, SortOrder } from '@/@generated-types';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { BlackboardService } from './services/blackboard.service';

/**
 * @description The blackboard resolver handling GraphQL access to blackboards.
 * */
@Resolver(() => Blackboard)
export class BlackboardResolver {
  constructor(private blackboardService: BlackboardService) {}

  /**
   * @description Get all blackboards.
   * */
  @Query(() => [Blackboard])
  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.blackboardService.getAllBlackboards();
  }

  /**
   * @description Get the last blackboards.
   *
   * @param sort The sort order of the blackboards.
   * @param limit The number of blackboards to return.
   * @param lastId The id of the last blackboard to start from.
   * */
  @Query(() => [Blackboard])
  async getPaginatedBlackboards(
    @Args('sort', { type: () => SortOrder }) sort: SortOrder,
    @Args('limit') limit: number,
    @Args('lastId', { nullable: true })
    lastId?: string,
  ): Promise<Blackboard[]> {
    return this.blackboardService.getPaginatedBlackboards(sort, limit, lastId);
  }

  /**
   * @description Get a blackboard by its id.
   * */
  @Query(() => Blackboard)
  async getBlackboardById(@Args('id') id: string): Promise<Blackboard> {
    return this.blackboardService.getBlackboardById(id);
  }

  /**
   * @description Create a new blackboard.
   *
   * @param createBlackboardDto The data to create the blackboard.
   * */
  @Mutation(() => Blackboard)
  async createBlackboard(
    @Args('blackboard') createBlackboardDto: CreateBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.createBlackboard(createBlackboardDto);
  }

  /**
   * @description Edit a blackboard.
   *
   * @param id The id of the blackboard to edit.
   * @param editBlackboardDto The data to edit the blackboard.
   * */
  @Mutation(() => Blackboard)
  async editBlackboard(
    @Args('id') id: string,
    @Args('blackboard') editBlackboardDto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.blackboardService.editBlackboard(id, editBlackboardDto);
  }

  /**
   * @description Delete a blackboard.
   *
   * @param id The id of the blackboard to delete.
   * */
  @Mutation(() => Blackboard)
  async deleteBlackboard(@Args('id') id: string): Promise<Blackboard> {
    return this.blackboardService.deleteBlackboard(id);
  }
}
