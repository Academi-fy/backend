import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course } from '../../@generated-types';
import { CreateCourseDto, EditCourseDto } from './dto';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private courseService: CourseService) {}

  @Query(() => [Course])
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  @Query(() => Course)
  async getCourse(@Args('id') id: string): Promise<Course> {
    return this.courseService.getCourseById(id);
  }

  @Mutation(() => Course)
  async createCourse(
    @Args('course') createCourseDto: CreateCourseDto,
  ): Promise<Course> {
    return this.courseService.createCourse(createCourseDto);
  }

  @Mutation(() => Course)
  async editCourse(
    @Args('id') id: string,
    @Args('course') editCourseDto: EditCourseDto,
  ): Promise<Course> {
    return this.courseService.editCourse(id, editCourseDto);
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Args('id') id: string): Promise<boolean> {
    return this.courseService.deleteCourse(id);
  }
}
