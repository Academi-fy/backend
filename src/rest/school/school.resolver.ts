import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { School } from '../../@generated-types';
import { SchoolService } from './school.service';
import { CreateSchoolDto, EditSchoolDto } from './dto';

@Resolver(() => School)
export class SchoolResolver {
  constructor(private schoolService: SchoolService) {}

  @Query(() => [School])
  async getAllSchools(): Promise<School[]> {
    return await this.schoolService.getAllSchools();
  }

  @Query(() => School)
  async getSchool(
    @Args('id', { nullable: true }) id: string,
    @Args('name', { nullable: true }) name: string,
  ): Promise<School> {
    if (id) {
      return await this.schoolService.getSchoolById(id);
    } else if (name) {
      return await this.schoolService.getSchoolByName(name);
    } else throw new Error('No id or name provided');
  }

  @Mutation(() => School)
  async createSchool(@Args('school') createSchoolDto: CreateSchoolDto) {
    return await this.schoolService.createSchool(createSchoolDto);
  }

  @Mutation(() => School)
  async editSchool(
    @Args('id') id: string,
    @Args('school') editSchoolDto: EditSchoolDto,
  ) {
    return await this.schoolService.editSchool(id, editSchoolDto);
  }

  @Mutation(() => School)
  async deleteSchool(@Args('id') id: string) {
    return await this.schoolService.deleteSchool(id);
  }
}
