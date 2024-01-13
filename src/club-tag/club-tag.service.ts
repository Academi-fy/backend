import { Injectable } from '@nestjs/common';
import { PrismaService } from 'test/nestjs';
import { CreateClubTagDto, EditClubTagDto } from './dto';
import { ClubTag } from '@prisma/client';
import { Service } from '../service';

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

  async createClubTag(dto: CreateClubTagDto): Promise<ClubTag> {
    return this.prisma.clubTag.create({
      data: {
        ...dto,
        clubs: this.connectArray(dto.clubs),
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
        clubs: this.connectArray(dto.clubs),
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
