import { Grade } from '../../@generated-types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { EditGradeDto } from './dto/edit-grade.dto';

@Resolver(() => Grade)
export class GradeResolver {
  constructor(private gradeService: GradeService) {}

  @Query(() => [Grade])
  async getAllGrades(): Promise<Grade[]> {
    return this.gradeService.getAllGrades();
  }

  @Query(() => Grade)
  async getGrade(@Args('id') id: string): Promise<Grade> {
    return this.gradeService.getGradeById(id);
  }

  @Mutation(() => Grade)
  async createGrade(
    @Args('grade') createGradeDto: CreateGradeDto,
  ): Promise<Grade> {
    return this.gradeService.createGrade(createGradeDto);
  }

  @Mutation(() => Grade)
  async editGrade(
    @Args('id') id: string,
    @Args('grade') editGradeDto: EditGradeDto,
  ): Promise<Grade> {
    return this.gradeService.editGrade(id, editGradeDto);
  }

  @Mutation(() => Grade)
  async deleteGrade(@Args('id') id: string): Promise<Grade> {
    return this.gradeService.deleteGrade(id);
  }
}
