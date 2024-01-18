import { Injectable } from '@nestjs/common';
import { Club } from '@prisma/client';
import { CreateClubDto, EditClubDto } from './dto';
import { Service } from '../../service';
import { PrismaService } from '../../prisma';

@Injectable()
export class ClubService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

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
        chat: this.connectSingle(dto.chat),
        events: this.connectArray(dto.events),
        leaders: this.connectArray(dto.leaders),
        members: this.connectArray(dto.members),
        school: this.connectSingle(dto.school),
        tags: this.connectArray(dto.tags),
      },
    });
  }

  async editClub(clubId: string, dto: EditClubDto): Promise<Club> {
    return this.prisma.club.update({
      where: { id: clubId },
      data: {
        ...dto,
        chat: this.connectSingle(dto.chat),
        events: this.connectArray(dto.events),
        leaders: this.connectArray(dto.leaders),
        members: this.connectArray(dto.members),
        school: this.connectSingle(dto.school),
        tags: this.connectArray(dto.tags),
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
