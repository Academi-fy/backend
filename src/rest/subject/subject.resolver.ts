import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Subject, SubjectType } from '../../@generated-types';
import { SubjectService } from './subject.service';
import { CreateSubjectDto, EditSubjectDto } from './dto';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private subjectService: SubjectService) {}

  @Query(() => [Subject])
  async getAllSubjects(): Promise<Subject[]> {
    return await this.subjectService.getAllSubjects();
  }

  @Query(() => Subject)
  async getSubject(
    @Args('id', { nullable: true }) id: string,
    @Args('type', { type: () => SubjectType, nullable: true })
    type: SubjectType,
  ): Promise<Subject> {
    if (id) {
      return await this.subjectService.getSubjectById(id);
    } else if (type) {
      return await this.subjectService.getSubjectByType(type);
    } else throw new Error('No id or type provided');
  }

  @Mutation(() => Subject)
  async createSubject(@Args('subject') createSubjectDto: CreateSubjectDto) {
    return await this.subjectService.createSubject(createSubjectDto);
  }

  @Mutation(() => Subject)
  async editSubject(
    @Args('id') id: string,
    @Args('subject') editSubjectDto: EditSubjectDto,
  ) {
    return await this.subjectService.editSubject(id, editSubjectDto);
  }

  @Mutation(() => Subject)
  async deleteSubject(@Args('id') id: string) {
    return await this.subjectService.deleteSubject(id);
  }
}
