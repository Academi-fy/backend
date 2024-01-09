import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlackboardTagDto } from './dto/create-blackboard-tag.dto';
import { EditBlackboardTagDto } from './dto/edit-blackboard-tag.dto';

@Injectable()
export class BlackboardTagService {
  constructor(private prisma: PrismaService) {}

  async getAllBlackboardTags() {
    return this.prisma.blackboardTag.findMany({});
  }

  async getBlackboardTagById(blackboardTagId: string) {
    return this.prisma.blackboardTag.findUnique({
      where: { id: blackboardTagId },
    });
  }

  async getBlackboardTagByTag(tag: string) {
    return this.prisma.blackboardTag.findUnique({
      where: { name: tag },
    });
  }

  async createBlackboardTag(dto: CreateBlackboardTagDto) {
    return this.prisma.blackboardTag.create({
      data: {
        ...dto,
      },
    });
  }

  async editBlackboardTagById(
    blackboardTagId: string,
    dto: EditBlackboardTagDto,
  ) {
    return this.prisma.blackboardTag.update({
      where: { id: blackboardTagId },
      data: {
        ...dto,
      },
    });
  }

  async editBlackboardTagByTag(tag: string, dto: EditBlackboardTagDto) {
    return this.prisma.blackboardTag.update({
      where: { name: tag },
      data: {
        ...dto,
      },
    });
  }

  async deleteBlackboardTag(blackboardTagId: string) {
    const deletedBlackboardTag = await this.prisma.blackboardTag.delete({
      where: { id: blackboardTagId },
    });
    return Boolean(deletedBlackboardTag);
  }
}
