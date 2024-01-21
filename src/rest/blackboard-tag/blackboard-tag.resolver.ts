import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlackboardTagService } from './blackboard-tag.service';
import { BlackboardTag } from '../../@generated-types';
import { CreateBlackboardTagDto, EditBlackboardTagDto } from './dto';

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
    @Args('id') id: string,
    @Args('blackboardTag') editBlackboardTagDto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagById(
      id,
      editBlackboardTagDto,
    );
  }

  @Mutation(() => BlackboardTag)
  async editBlackboardTagByTag(
    @Args('tag') tag: string,
    @Args('editBlackboardTagDto') editBlackboardTagDto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagByTag(
      tag,
      editBlackboardTagDto,
    );
  }

  @Mutation(() => Boolean)
  async deleteBlackboardTagById(@Args('id') id: string): Promise<boolean> {
    return this.blackboardTagService.deleteBlackboardTagById(id);
  }

  @Mutation(() => Boolean)
  async deleteBlackboardTagByTag(@Args('tag') tag: string): Promise<boolean> {
    return this.blackboardTagService.deleteBlackboardTagByTag(tag);
  }
}
