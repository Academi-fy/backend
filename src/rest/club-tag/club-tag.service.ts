import { Injectable } from '@nestjs/common';
import { ClubTag } from '../../@generated-types';

import { Service } from '../../service';
import { PrismaService } from '../../prisma/prisma.service';

import { clubTagNesting } from './club-tag.nesting';
import { CreateClubTagDto, EditClubTagDto } from './dto';

@Injectable()
export class ClubTagService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllClubTags(): Promise<ClubTag[]> {
    return this.prisma.clubTag.findMany({
      include: {
        ...clubTagNesting,
      },
    });
  }

  async getClubTagById(clubTagId: string): Promise<ClubTag> {
    return this.prisma.clubTag.findUnique({
      where: { id: clubTagId },
      include: {
        ...clubTagNesting,
      },
    });
  }

  async createClubTag(dto: CreateClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubTagNesting,
      },
    });
  }

  async editClubTag(clubTagId: string, dto: EditClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.update({
      where: {
        id: clubTagId,
      },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubTagNesting,
      },
    });
  }

  async deleteClubTag(clubTagId: string): Promise<ClubTag> {
    return this.prisma.clubTag.delete({
      where: { id: clubTagId },
      include: {
        ...clubTagNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateClubTagDto | EditClubTagDto) {
    return {
      ...dto,
      clubs: this.connectArray(dto.clubs),
      name: dto.name ? dto.name : undefined,
    };
  }
}
