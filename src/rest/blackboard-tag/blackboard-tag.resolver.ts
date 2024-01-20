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
  async getBlackboardTagById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagById(id);
  }

  @Query(() => BlackboardTag)
  async getBlackboardTagByTag(
    @Args('tagName', { type: () => String }) tagName: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagByTag(tagName);
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
    @Args('id', { type: () => String }) id: string,
    @Args('blackboardTag') editBlackboardTagDto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagById(
      id,
      editBlackboardTagDto,
    );
  }

  @Mutation(() => BlackboardTag)
  async editBlackboardTagByTag(
    @Args('tag', { type: () => String }) tag: string,
    @Args('editBlackboardTagDto') editBlackboardTagDto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagByTag(
      tag,
      editBlackboardTagDto,
    );
  }

  @Mutation(() => Boolean)
  async deleteBlackboardTagById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<boolean> {
    return this.blackboardTagService.deleteBlackboardTagById(id);
  }

  @Mutation(() => Boolean)
  async deleteBlackboardTagByTag(
    @Args('tag', { type: () => String }) tag: string,
  ): Promise<boolean> {
    return this.blackboardTagService.deleteBlackboardTagByTag(tag);
  }
}
