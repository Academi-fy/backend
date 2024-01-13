import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlackboardTagDto } from './dto/create-blackboard-tag.dto';
import { EditBlackboardTagDto } from './dto/edit-blackboard-tag.dto';
import { BlackboardTag } from '@prisma/client';

@Injectable()
export class BlackboardTagService {
  constructor(private prisma: PrismaService) {}

  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.prisma.blackboardTag.findMany({});
  }

  async getBlackboardTagById(blackboardTagId: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { id: blackboardTagId },
    });
  }

  async getBlackboardTagByTag(tag: string): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.findUnique({
      where: { name: tag },
    });
  }

  async createBlackboardTag(
    dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.prisma.blackboardTag.create({
      data: {
        ...dto,
        blackboards: dto.blackboards
          ? {
              connect: dto.blackboards.map((blackboard) => ({
                id: blackboard,
              })),
            }
          : undefined,
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
        blackboards: {
          connect: dto.blackboards
            ? dto.blackboards.map((blackboard) => ({ id: blackboard }))
            : undefined,
        },
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
        blackboards: {
          connect: dto.blackboards
            ? dto.blackboards.map((blackboard) => ({ id: blackboard }))
            : undefined,
        },
      },
    });
  }

  async deleteBlackboardTag(blackboardTagId: string): Promise<boolean> {
    const deletedBlackboardTag = await this.prisma.blackboardTag.delete({
      where: { id: blackboardTagId },
    });
    return Boolean(deletedBlackboardTag);
  }
}
