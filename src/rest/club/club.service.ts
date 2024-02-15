import { Injectable } from '@nestjs/common';
import { Club } from '@prisma/client';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { clubNesting } from './club.nesting';
import { CreateClubDto, EditClubDto } from './dto';

@Injectable()
export class ClubService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllClubs(): Promise<Club[]> {
    return this.prisma.club.findMany({
      include: {
        ...clubNesting,
      },
    });
  }

  async getClubById(clubId: string): Promise<Club> {
    return this.prisma.club.findUnique({
      where: { id: clubId },
      include: {
        ...clubNesting,
      },
    });
  }

  async createClub(dto: CreateClubDto): Promise<Club> {
    return this.prisma.club.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
  }

  async editClub(clubId: string, dto: EditClubDto): Promise<Club> {
    return this.prisma.club.update({
      where: { id: clubId },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...clubNesting,
      },
    });
  }

  async deleteClub(clubId: string): Promise<Club> {
    return this.prisma.club.delete({
      where: { id: clubId },
      include: {
        ...clubNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateClubDto | EditClubDto) {
    return {
      ...dto,
      requirements: this.stringifyArray(dto.requirements),
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
