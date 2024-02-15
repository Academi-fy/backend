import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Class } from '../../@generated-types';
import { ClassService } from './class.service';
import { CreateClassDto, EditClassDto } from './dto';

@Resolver(() => Class)
export class ClassResolver {
  constructor(private classService: ClassService) {}

  @Query(() => [Class])
  async getAllClasses(): Promise<Class[]> {
    return this.classService.getAllClasses();
  }

  @Query(() => Class)
  async getClass(@Args('id') id: string): Promise<Class> {
    return this.classService.getClassById(id);
  }

  @Mutation(() => Class)
  async createClass(
    @Args('class') createClassDto: CreateClassDto,
  ): Promise<Class> {
    return this.classService.createClass(createClassDto);
  }

  @Mutation(() => Class)
  async editClass(
    @Args('id') id: string,
    @Args('class') editClassDto: EditClassDto,
  ): Promise<Class> {
    return this.classService.editClass(id, editClassDto);
  }

  @Mutation(() => Class)
  async deleteClass(@Args('id') id: string): Promise<Class> {
    return this.classService.deleteClass(id);
  }
}
