import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { Event } from '@prisma/client';
import { CreateEventDto, EditEventDto } from './dto';
import { Service } from '../../service';
import { eventNesting } from './event.nesting';

@Injectable()
export class EventService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllEvents(): Promise<Event[]> {
    return this.prisma.event.findMany({
      include: {
        ...eventNesting,
      },
    });
  }

  async getEventById(id: string): Promise<Event> {
    return this.prisma.event.findUnique({
      where: { id: id },
      include: {
        ...eventNesting,
      },
    });
  }

  async createEvent(dto: CreateEventDto): Promise<Event> {
    return this.prisma.event.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...eventNesting,
      },
    });
  }

  async editEvent(id: string, dto: EditEventDto): Promise<Event> {
    return this.prisma.event.update({
      where: { id: id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...eventNesting,
      },
    });
  }

  async deleteEvent(eventId: string): Promise<Event> {
    return this.prisma.event.delete({
      where: { id: eventId },
      include: {
        ...eventNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateEventDto | EditEventDto) {
    return {
      ...dto,
      clubs: this.connectArray(dto.clubs),
      school: this.connectSingle(dto.school),
      subscribers: this.connectArray(dto.subscribers),
      tickets: this.connectArray(dto.tickets),
      information: this.stringifyArray(dto.information),
      endDate: dto.endDate ? new Date(dto.endDate) : undefined,
      host: this.stringifySingle(dto.host),
      startDate: dto.startDate ? new Date(dto.startDate) : undefined,
      title: dto.title ? dto.title : undefined,
    };
  }
}
