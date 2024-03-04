import { Injectable } from '@nestjs/common';

import { Blackboard } from '@/@generated-types';
import { Service } from '@/service';
import { SortOrder } from '@/prisma';

import { blackboardNesting } from './';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BlackboardService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllBlackboards(): Promise<Blackboard[]> {
    const blackboards: Blackboard[] = await this.prisma.blackboard.findMany({
      include: {
        ...blackboardNesting,
      },
    });

    if (!blackboards) throw new Error('No blackboards found');
    return blackboards;
  }

  async getLastBlackboards(sort: SortOrder, limit: number, lastId?: string) {
    const blackboards: Blackboard[] = await this.prisma.blackboard.findMany({
      orderBy: {
        [sort]: 'desc',
      },
      take: limit,
      cursor: lastId ? { id: lastId } : undefined,
      skip: lastId ? 1 : 0,
    });

    if (!blackboards)
      throw new Error(
        `No blackboards found: sort: ${sort}, limit: ${limit}, lastId: ${lastId}`,
      );
    return blackboards;
  }

  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.findUnique({
      where: { id: blackboardId },
      include: {
        ...blackboardNesting,
      },
    });

    if (!blackboard) throw new Error(`Blackboard '${blackboardId}' not found`);
    return blackboard;
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    const createdBlackboard: Blackboard = await this.prisma.blackboard.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });

    if (!createdBlackboard)
      throw new Error(`Blackboard could not be created with data: ${dto}`);
    return createdBlackboard;
  }

  async editBlackboard(
    blackboardId: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    const modifiedBlackboard: Blackboard = await this.prisma.blackboard.update({
      where: { id: blackboardId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });

    if (!modifiedBlackboard)
      throw new Error(`Blackboard '${blackboardId}' not found`);
    return modifiedBlackboard;
  }

  async deleteBlackboard(blackboardId: string): Promise<Blackboard> {
    const deletedBlackboard: Blackboard = await this.prisma.blackboard.delete({
      where: { id: blackboardId },
      include: {
        ...blackboardNesting,
      },
    });

    if (!deletedBlackboard)
      throw new Error(`Blackboard '${blackboardId}' not found`);
    return deletedBlackboard;
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
