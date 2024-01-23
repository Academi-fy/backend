import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlackboardTagService } from './blackboard-tag.service';
import { BlackboardTag } from '../../@generated-types';
import { CreateBlackboardTagDto } from './dto';

@Resolver()
export class BlackboardTagResolver {
  constructor(private blackboardTagService: BlackboardTagService) {}

  @Query(() => [BlackboardTag])
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.blackboardTagService.getAllBlackboardTags();
  }

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

  @Mutation(() => BlackboardTag)
  async createBlackboardTag(
    @Args('blackboardTag')
    createBlackboardTagDto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.createBlackboardTag(
      createBlackboardTagDto,
    );
  }

  @Mutation(() => BlackboardTag)
  async editBlackboardTagById(
    @Args('blackboardTag') editBlackboardTagDto: CreateBlackboardTagDto,
    @Args('id', { nullable: true }) id?: string,
    @Args('tag', { nullable: true }) tag?: string,
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

  @Mutation(() => BlackboardTag)
  async deleteBlackboardTagById(
    @Args('id', { nullable: true }) id?: string,
    @Args('tag', { nullable: true }) tag?: string,
  ): Promise<BlackboardTag> {
    if (id) {
      return this.blackboardTagService.deleteBlackboardTagById(id);
    } else if (tag) {
      return this.blackboardTagService.deleteBlackboardTagByTag(tag);
    } else throw new Error('No id or tag provided');
  }
}
