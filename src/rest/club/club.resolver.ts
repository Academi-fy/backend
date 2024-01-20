import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Club } from '../../@generated-types';
import { ClubService } from './club.service';
import { CreateClubDto, EditClubDto } from './dto';

@Resolver(() => Club)
export class ClubResolver {
  constructor(private clubService: ClubService) {}

  @Query(() => [Club])
  async getAllClubs(): Promise<Club[]> {
    return this.clubService.getAllClubs();
  }

  @Query(() => Club)
  async getClubById(@Args('id') id: string): Promise<Club> {
    return this.clubService.getClubById(id);
  }

  @Mutation(() => Club)
  async createClub(@Args('club') createClubDto: CreateClubDto): Promise<Club> {
    return this.clubService.createClub(createClubDto);
  }

  @Mutation(() => Club)
  async editClub(
    @Args('id') id: string,
    @Args('club') editClubDto: EditClubDto,
  ): Promise<Club> {
    return this.clubService.editClub(id, editClubDto);
  }

  @Mutation(() => Boolean)
  async deleteClub(@Args('id') id: string): Promise<boolean> {
    return this.clubService.deleteClub(id);
  }
}
