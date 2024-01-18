import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Blackboard } from '@prisma/client';
import { Service } from '../service';
import { CreateBlackboardDto, EditBlackboardDto } from './dto';
import blackboardNesting from './blackboard-nesting';

@Injectable()
export class BlackboardService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllBlackboards(): Promise<Blackboard[]> {
    return this.prisma.blackboard.findMany(blackboardNesting);
  }

  async getBlackboardById(blackboardId: string): Promise<Blackboard> {
    return this.prisma.blackboard.findUnique({
      where: { id: blackboardId },
      ...blackboardNesting,
    });
  }

  async createBlackboard(dto: CreateBlackboardDto): Promise<Blackboard> {
    return this.prisma.blackboard.create({
      data: {
        ...dto,
        school: this.connectSingle(dto.school),
        tags: this.connectArray(dto.tags),
        authors: this.connectArray(dto.authors),
        targets: this.connectArray(dto.targets),
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
        ...dto,
        school: this.connectSingle(dto.school),
        tags: this.connectArray(dto.tags),
        authors: this.connectArray(dto.authors),
        targets: this.connectArray(dto.targets),
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
