import { PrismaService } from '@/prisma/prisma.service';
import {
  blackboardTagNesting,
  CreateBlackboardTagDto,
  EditBlackboardTagDto,
} from '@/rest/blackboard-tag';
import { BlackboardTag } from '@/@generated-types';
import { Service } from '@/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlackboardTagDatabaseService extends Service {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  /**
   * Get all blackboard tags from the database
   * */
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.prisma.blackboardTag.findMany({
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Get a blackboard tag by its id
   * */
  async getBlackboardTagById(blackboardTagId: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { id: blackboardTagId },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Get a blackboard tag by its tag name
   * */
  async getBlackboardTagByTag(tagName: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { name: tagName },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Create a new blackboard tag
   *
   * @param dto - The data to create the blackboard tag
   * */
  async createBlackboardTag(
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Edit a blackboard tag by its id
   *
   * @param blackboardTagId - The id of the blackboard tag to edit
   * @param dto - The data to edit the blackboard tag
   * */
  async editBlackboardTagById(
    blackboardTagId: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.update({
      where: { id: blackboardTagId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Edit a blackboard tag by its tag name
   *
   * @param tag - The tag name of the blackboard tag to edit
   * @param dto - The data to edit the blackboard tag
   * */
  async editBlackboardTagByTag(
    tag: string,
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.update({
      where: { name: tag },
      data: {
        ...dto,
        blackboards: this.connectArray(dto.blackboards),
      },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Delete a blackboard tag by its id
   *
   * @param blackboardTagId - The id of the blackboard tag to delete
   * */
  async deleteBlackboardTagById(
    blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.delete({
      where: { id: blackboardTagId },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * Delete a blackboard tag by its tag name
   *
   * @param tag - The tag name of the blackboard tag to delete
   * */
  async deleteBlackboardTagByTag(tag: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.delete({
      where: { name: tag },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  /**
   * @description Map the dto data to the data object that can be used by Prisma
   * ORM to link fields.
   * */
  private mapDtoToData(dto: CreateBlackboardTagDto | EditBlackboardTagDto) {
    return {
      ...dto,
      blackboards: this.connectArray(dto.blackboards),
      name: dto.name.toLowerCase(),
    };
  }
}
