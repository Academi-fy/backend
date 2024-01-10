import { Injectable } from '@nestjs/common';
import { PrismaService } from 'test/nestjs';
import { CreateClubDto } from './dto/create-club.dto';
import { EditClubDto } from './dto/edit-club.dto';
import { Club } from '@prisma/client';

@Injectable()
export class ClubService {
  constructor(private prisma: PrismaService) {}

  async getAllClubs(): Promise<Club[]> {
    return this.prisma.club.findMany({});
  }

  async getClubById(clubId: string): Promise<Club> {
    return this.prisma.club.findUnique({
      where: { id: clubId },
    });
  }

  async createClub(dto: CreateClubDto): Promise<Club> {
    return this.prisma.club.create({
      data: {
        ...dto,
        chat: { connect: { id: dto.chat } },
        events: { connect: dto.events.map((event) => ({ id: event })) },
        leaders: { connect: dto.leaders.map((leader) => ({ id: leader })) },
        members: { connect: dto.members.map((member) => ({ id: member })) },
        school: { connect: { id: dto.school } },
        tags: { connect: dto.tags.map((tag) => ({ id: tag })) },
      },
    });
  }

  async editClub(clubId: string, dto: EditClubDto): Promise<Club> {
    return this.prisma.club.update({
      where: { id: clubId },
      data: {
        ...dto,
        chat: dto.chat ? { connect: { id: dto.chat } } : undefined,
        events: dto.events
          ? { connect: dto.events.map((event) => ({ id: event })) }
          : undefined,
        leaders: dto.leaders
          ? { connect: dto.leaders.map((leader) => ({ id: leader })) }
          : undefined,
        members: dto.members
          ? { connect: dto.members.map((member) => ({ id: member })) }
          : undefined,
        school: dto.school ? { connect: { id: dto.school } } : undefined,
        tags: dto.tags
          ? { connect: dto.tags.map((tag) => ({ id: tag })) }
          : undefined,
      },
    });
  }

  async deleteClub(clubId: string): Promise<boolean> {
    const deleted = this.prisma.club.delete({
      where: { id: clubId },
    });
    return Boolean(deleted);
  }
}
