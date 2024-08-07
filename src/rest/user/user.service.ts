import { Injectable } from '@nestjs/common';
import { User } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { userNesting } from './user.nesting';
import { CreateUserDto, EditUserDto } from './dto';

@Injectable()
export class UserService extends Service {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        ...userNesting,
      },
    });
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        ...userNesting,
      },
    });
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...userNesting,
      },
    });
  }

  async editUser(id: string, dto: EditUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...userNesting,
      },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
      include: {
        ...userNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateUserDto | EditUserDto) {
    return {
      ...dto,

      avatar: dto.avatar,
      blackboards: this.connectArray(dto.blackboards),
      blackboardsReceived: this.connectArray(dto.blackboardsReceived),
      chatActivitiesCreated: this.connectArray(dto.chatActivitiesCreated),
      classes: this.connectArray(dto.classes),
      clubs: this.connectArray(dto.clubs),
      clubsAsLeader: this.connectArray(dto.clubsAsLeader),
      courses: this.connectArray(dto.courses),
      coursesAsTeacher: this.connectArray(dto.coursesAsTeacher),
      events: this.connectArray(dto.events),
      eventTickets: this.connectArray(dto.eventTickets),
      firstName: dto.firstName,
      lastName: dto.lastName,
      readActivities: this.connectArray(dto.readActivities),
      schools: this.connectArray(dto.schools),
      targetActivities: this.connectArray(dto.targetActivities),
      type: dto.type,
      userAccount: this.connectSingle(dto.userAccount),
      userChats: this.connectArray(dto.userChats),
    };
  }
}
