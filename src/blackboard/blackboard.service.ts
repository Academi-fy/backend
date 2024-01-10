import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlackboardDto } from './dto/create-blackboard.dto';
import { EditBlackboardDto } from './dto/edit-blackboard.dto';
import { Blackboard } from '@prisma/client';

@Injectable()
export class BlackboardService {
  constructor(private prisma: PrismaService) {}

  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.prisma.blackboard.findMany({});
  }

  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    return this.prisma.blackboard.findUnique({
      where: { id: blackboardId },
    });
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.prisma.blackboard.create({
      data: {
        ...dto,
        school: {
          connect: { id: dto.school },
        },
        tags: {
          connect: dto.tags.map((tag) => ({ id: tag })),
        },
        authors: {
          connect: dto.authors.map((author) => ({ id: author })),
        },
        targets: {
          connect: dto.targets.map((target) => ({ id: target })),
        },
      },
    });
  }

  async editBlackboard(blackboardId: string, dto: EditBlackboardDto): Promise<Blackboard> {
    return this.prisma.blackboard.update({
      where: { id: blackboardId },
      data: {
        ...dto,
        school: dto.school ? { connect: { id: dto.school } } : undefined,
        tags: dto.tags
          ? { connect: dto.tags.map((tag) => ({ id: tag })) }
          : undefined,
        authors: dto.authors
          ? { connect: dto.authors.map((author) => ({ id: author })) }
          : undefined,
        targets: dto.targets
          ? { connect: dto.targets.map((target) => ({ id: target })) }
          : undefined,
      },
    });
  }

  async deleteBlackboard(blackboardId: string): Promise<boolean> {
    const deletedBlackboard = await this.prisma.blackboard.delete({
      where: { id: blackboardId },
    });
    return Boolean(deletedBlackboard);
  }
}
