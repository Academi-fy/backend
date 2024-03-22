import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Blackboard, SortOrder } from '@/@generated-types';
import {
  blackboardNesting,
  CreateBlackboardDto,
  EditBlackboardDto,
} from '@/rest/blackboard';
import { Service } from '@/service';

@Injectable()
export class BlackboardDatabaseService extends Service {
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

  async getUniqueBlackboard(id: string): Promise<Blackboard> {
    console.log('id', id);

    const blackboard: Blackboard = await this.prisma.blackboard.findUnique({
      where: { id },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) throw new Error(`Blackboard with id ${id} not found`);

    return blackboard;
  }

  async getLastBlackboards(
    sort: SortOrder,
    limit: number,
    lastId?: string,
  ): Promise<Blackboard[]> {
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

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) throw new Error('Blackboard not created');

    return blackboard;
  }

  async editBlackboard(
    id: string,
    dto: EditBlackboardDto,
  ): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.update({
      where: { id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) throw new Error(`Blackboard with id ${id} not updated`);

    return blackboard;
  }

  async deleteBlackboard(id: string): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.delete({
      where: { id },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) throw new Error(`Blackboard with id ${id} not deleted`);

    return blackboard;
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
