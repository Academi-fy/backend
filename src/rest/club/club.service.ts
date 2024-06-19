import { Injectable } from '@nestjs/common';
import { Club } from '@prisma/client';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { clubNesting } from './club.nesting';
import { CreateClubDto, EditClubDto } from './dto';
import { ClubRequirement } from '@/rest/club/entities/club-requirement.entity';

@Injectable()
export class ClubService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllClubs(): Promise<Club[]> {
    const clubs = this.prisma.club.findMany({
      include: {
        ...clubNesting,
      },
    });
    if (!clubs) throw new Error('No clubs found');

    return clubs;
  }

  async getClubById(clubId: string): Promise<Club> {
    const club = this.prisma.club.findUnique({
      where: { id: clubId },
      include: {
        ...clubNesting,
      },
    });
    if (!club) throw new Error(`Club '${clubId}' not found`);

    return club;
  }

  async createClub(dto: CreateClubDto): Promise<Club> {
    const club = this.prisma.club.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
    if (!club)
      throw new Error(
        `Club could not be created \n${JSON.stringify(dto, null, 2)}`,
      );

    return club;
  }

  async editClub(clubId: string, dto: EditClubDto): Promise<Club> {
    const club = this.prisma.club.update({
      where: { id: clubId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
    if (!club)
      throw new Error(
        `Club '${clubId}' could not be modified \n${JSON.stringify(dto, null, 2)}`,
      );

    return club;
  }

  async deleteClub(clubId: string): Promise<Club> {
    const club = this.prisma.club.delete({
      where: { id: clubId },
      include: {
        ...clubNesting,
      },
    });
    if (!club) throw new Error(`Club '${clubId}' could not be deleted`);

    return club;
  }

  private mapDtoToData(dto: CreateClubDto | EditClubDto) {
    const req = dto.requirements
      ? dto.requirements.map((requirement: ClubRequirement) => ({
          ...requirement,
        }))
      : undefined;

    return {
      requirements: req,
      chat: this.connectSingle(dto.chat),
      events: this.connectArray(dto.events),
      leaders: this.connectArray(dto.leaders),
      members: this.connectArray(dto.members),
      school: this.connectSingle(dto.school),
      tags: this.connectArray(dto.tags),

      name: dto.name ? dto.name : undefined,
    };
  }
}
