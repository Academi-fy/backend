import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Club, ClubTag } from '../../@generated-types';
import { ClubTagService } from './club-tag.service';
import { CreateClubTagDto, EditClubTagDto } from './dto';

@Resolver(() => Club)
export class ClubTagResolver {
  constructor(private clubTagService: ClubTagService) {}

  @Query(() => [ClubTag])
  async getAllClubTags(): Promise<ClubTag[]> {
    return this.clubTagService.getAllClubTags();
  }

  @Query(() => ClubTag)
  async getClubTag(@Args('id') id: string): Promise<ClubTag> {
    return this.clubTagService.getClubTagById(id);
  }

  @Mutation(() => ClubTag)
  async createClubTag(
    @Args('clubTag') createClubTagDto: CreateClubTagDto,
  ): Promise<ClubTag> {
    return this.clubTagService.createClubTag(createClubTagDto);
  }

  @Mutation(() => ClubTag)
  async editClubTag(
    @Args('id') id: string,
    @Args('clubTag') editClubTagDto: EditClubTagDto,
  ): Promise<ClubTag> {
    return this.clubTagService.editClubTag(id, editClubTagDto);
  }

  @Mutation(() => ClubTag)
  async deleteClubTag(@Args('id') id: string): Promise<ClubTag> {
    return this.clubTagService.deleteClubTag(id);
  }
}
