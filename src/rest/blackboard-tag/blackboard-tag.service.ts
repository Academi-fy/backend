import { Injectable } from '@nestjs/common';
import { BlackboardTag } from '@prisma/client';
import { CreateBlackboardTagDto, EditBlackboardTagDto } from './dto';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';
import { blackboardTagNesting } from './blackboard-tag.nesting';

@Injectable()
export class BlackboardTagService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.prisma.blackboardTag.findMany({
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  async getBlackboardTagById(blackboardTagId: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { id: blackboardTagId },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  async getBlackboardTagByTag(tag: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { name: tag },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  async createBlackboardTag(
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.create({
      data: {
        ...dto,
        blackboards: this.connectArray(dto.blackboards),
      },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  async editBlackboardTagById(
    blackboardTagId: string,
    dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.update({
      where: { id: blackboardTagId },
      data: {
        ...dto,
        blackboards: this.connectArray(dto.blackboards),
      },
      include: {
        ...blackboardTagNesting,
      },
    });
  }

  async editBlackboardTagByTag(
    tag: string,
    dto: EditBlackboardTagDto,
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

  async deleteBlackboardTagById(blackboardTagId: string): Promise<boolean> {
    const deletedBlackboardTag = await this.prisma.blackboardTag.delete({
      where: { id: blackboardTagId },
    });
    return Boolean(deletedBlackboardTag);
  }

  async deleteBlackboardTagByTag(tag: string): Promise<boolean> {
    const deletedBlackboardTag = await this.prisma.blackboardTag.delete({
      where: { name: tag },
    });
    return Boolean(deletedBlackboardTag);
  }
}
