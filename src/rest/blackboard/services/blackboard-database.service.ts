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

  /**
   * @description Get all blackboards from the database.
   * */
  async getAllBlackboards(): Promise<Blackboard[]> {
    const blackboards: Blackboard[] = await this.prisma.blackboard.findMany({
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboards) throw new Error('No blackboards found');

    return blackboards;
  }

  /**
   * @description Get a blackboard by its id.
   * */
  async getUniqueBlackboard(id: string): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.findUnique({
      where: { id },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) throw new Error(`Blackboard with id ${id} not found`);

    return blackboard;
  }

  /**
   * @description Get the last blackboards from the database.
   *
   * @param sort The sort order of the blackboards.
   * @param limit The number of blackboards to return.
   * @param lastId The id of the last blackboard to start from.
   * */
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

  /**
   * @description Create a new blackboard in the database.
   *
   * @param dto The data to create the blackboard.
   * */
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

  /**
   * @description Edit a blackboard in the database.
   *
   * @param id The id of the blackboard to edit.
   * @param dto The data to edit the blackboard.
   * */
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
    if (!blackboard) return null;

    return blackboard;
  }

  /**
   * @description Delete a blackboard from the database.
   *
   * @param id The id of the blackboard to delete.
   * */
  async deleteBlackboard(id: string): Promise<Blackboard> {
    const blackboard: Blackboard = await this.prisma.blackboard.delete({
      where: { id },
      include: {
        ...blackboardNesting,
      },
    });
    if (!blackboard) return null;

    return blackboard;
  }

  /**
   * @description Map the dto data to the data object that can be used by Prisma
   * ORM to link fields.
   * */
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
