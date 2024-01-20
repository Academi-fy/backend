import { Injectable } from '@nestjs/common';
import { CreateClubTagDto, EditClubTagDto } from './dto';
import { ClubTag } from '@prisma/client';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';

@Injectable()
export class ClubTagService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllClubTags(): Promise<ClubTag[]> {
    return this.prisma.clubTag.findMany({});
  }

  async getClubTagById(clubTagId: string): Promise<ClubTag> {
    return this.prisma.clubTag.findUnique({
      where: { id: clubTagId },
    });
  }

  private mapDtoToData(dto: CreateClubTagDto | EditClubTagDto) {
    return {
      ...dto,
      clubs: this.connectArray(dto.clubs),
      name: dto.name ? dto.name : undefined,
    };
  }

  async createClubTag(dto: CreateClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.create({
      data: {
        ...this.mapDtoToData(dto),
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
    });
  }

  async deleteClubTag(clubTagId: string): Promise<boolean> {
    const deleted = this.prisma.clubTag.delete({
      where: { id: clubTagId },
    });

    return Boolean(deleted);
  }
}