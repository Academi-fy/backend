import { Injectable } from '@nestjs/common';
import { Blackboard } from '@prisma/client';
import { Service } from '../../service';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { blackboardNesting } from './';
import { PrismaService } from '../../prisma';

@Injectable()
export class BlackboardService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.prisma.blackboard.findMany({
      include: {
        ...blackboardNesting,
      },
    });
  }

  async getLastBlackboards(
    sort: 'createdAt' | 'updatedAt',
    limit: number,
    lastId?: string,
  ) {
    return this.prisma.blackboard.findMany({
      orderBy: {
        [sort]: 'desc',
      },
      take: limit,
      cursor: lastId ? { id: lastId } : undefined,
      skip: lastId ? 1 : 0,
    });
  }

  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    return this.prisma.blackboard.findUnique({
      where: { id: blackboardId },
      include: {
        ...blackboardNesting,
      },
    });
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.prisma.blackboard.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });
  }

  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    return this.prisma.blackboard.update({
      where: { id: blackboardId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });
  }

  async deleteBlackboard(blackboardId: string): Promise<boolean> {
    const deletedBlackboard = await this.prisma.blackboard.delete({
      where: { id: blackboardId },
    });
    return Boolean(deletedBlackboard);
  }

  private mapDtoToData(dto: CreateBlackboardDto | EditBlackboardDto) {
    return {
      ...dto,
      school: this.connectSingle(dto.school),
      tags: this.connectArray(dto.tags),
      authors: this.connectArray(dto.authors),
      targets: this.connectArray(dto.targets),
      title: dto.title ? dto.title : undefined,
    };
  }
}
