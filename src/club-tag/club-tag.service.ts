import { Injectable } from '@nestjs/common';
import { PrismaService } from 'test/nestjs';
import { CreateClubTagDto, EditClubTagDto } from './dto';
import { ClubTag } from '@prisma/client';

@Injectable()
export class ClubTagService {
  constructor(private prisma: PrismaService) {}

  async getAllClubTags(): Promise<ClubTag[]> {
    return this.prisma.clubTag.findMany({});
  }

  async getClubTagById(clubTagId: string): Promise<ClubTag> {
    return this.prisma.clubTag.findUnique({
      where: { id: clubTagId },
    });
  }

  async createClubTag(dto: CreateClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.create({
      data: {
        ...dto,
        clubs: dto.clubs
          ? { connect: dto.clubs.map((club) => ({ id: club })) }
          : undefined,
      },
    });
  }

  async editClubTag(clubTagId: string, dto: EditClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.update({
      where: {
        id: clubTagId,
      },
      data: {
        ...dto,
        clubs: dto.clubs
          ? { connect: dto.clubs.map((club) => ({ id: club })) }
          : undefined,
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
