import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BlackboardTagService } from './services/blackboard-tag.service';
import { BlackboardTag } from '@/@generated-types';
import { CreateBlackboardTagDto } from './dto';

/**
 * @description The blackboard tag resolver handling GraphQL access to
 * blackboard tags.
 * */
@Resolver()
export class BlackboardTagResolver {
  constructor(private blackboardTagService: BlackboardTagService) {}

  /**
   * @description Get all blackboard tags.
   * */
  @Query(() => [BlackboardTag])
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.blackboardTagService.getAllBlackboardTags();
  }

  /**
   * @description Get a blackboard tag by its id or tag name.
   *
   * @param id The id of the blackboard tag.
   * @param tagName The name of the blackboard tag.
   * */
  @Query(() => BlackboardTag)
  async getBlackboardTag(
    @Args('id', { nullable: true, description: 'OPTIONAL' }) id?: string,
    @Args('tagName', { nullable: true, description: 'OPTIONAL' })
    tagName?: string,
  ): Promise<BlackboardTag> {
    if (id) {
      return this.blackboardTagService.getBlackboardTagById(id);
    } else if (tagName) {
      return this.blackboardTagService.getBlackboardTagByTag(tagName);
    } else throw new Error('No id or tagName provided');
  }

  /**
   * @description Create a new blackboard tag.
   *
   * @param createBlackboardTagDto The data to create the blackboard tag.
   * */
  @Mutation(() => BlackboardTag)
  async createBlackboardTag(
    @Args('blackboardTag')
    createBlackboardTagDto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.createBlackboardTag(
      createBlackboardTagDto,
    );
  }

  /**
   * @description Edit a blackboard tag by its id or tag name.
   *
   * @param editBlackboardTagDto The data to edit the blackboard tag.
   * @param id The id of the blackboard tag.
   * @param tag The name of the blackboard tag.
   * */
  @Mutation(() => BlackboardTag)
  async editBlackboardTag(
    @Args('blackboardTag') editBlackboardTagDto: CreateBlackboardTagDto,
    @Args('id', { nullable: true, description: 'OPTIONAL' }) id?: string,
    @Args('tag', { nullable: true, description: 'OPTIONAL' }) tag?: string,
  ): Promise<BlackboardTag> {
    if (id) {
      return this.blackboardTagService.editBlackboardTagById(
        id,
        editBlackboardTagDto,
      );
    } else if (tag) {
      return this.blackboardTagService.editBlackboardTagByTag(
        tag,
        editBlackboardTagDto,
      );
    } else throw new Error('No id or tag provided');
  }

  /**
   * @description Delete a blackboard tag by its id or tag name.
   *
   * @param id The id of the blackboard tag.
   * @param tag The name of the blackboard tag.
   * */
  @Mutation(() => BlackboardTag)
  async deleteBlackboardTag(
    @Args('id', { nullable: true, description: 'OPTIONAL' }) id?: string,
    @Args('tag', { nullable: true, description: 'OPTIONAL' }) tag?: string,
  ): Promise<BlackboardTag> {
    if (id) {
      return this.blackboardTagService.deleteBlackboardTagById(id);
    } else if (tag) {
      return this.blackboardTagService.deleteBlackboardTagByTag(tag);
    } else throw new Error('No id or tag provided');
  }
}
