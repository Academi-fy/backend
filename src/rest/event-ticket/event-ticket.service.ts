import { BadRequestException, Injectable } from '@nestjs/common';
import { EventTicket } from '@/@generated-types';

import { Service } from '@/service';
import { PrismaService } from '@/prisma/prisma.service';

import { eventTicketNesting } from './event-ticket.nesting';
import { CreateEventTicketDto, EditEventTicketDto } from './dto';

@Injectable()
export class EventTicketService extends Service {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getAllEventTickets(): Promise<EventTicket[]> {
    return this.prisma.eventTicket.findMany({
      include: {
        ...eventTicketNesting,
      },
    });
  }

  async getEventTicketById(id: string): Promise<EventTicket> {
    return this.prisma.eventTicket.findUnique({
      where: { id: id },
      include: {
        ...eventTicketNesting,
      },
    });
  }

  async getEventTicketsByEventId(eventId: string): Promise<EventTicket[]> {
    if (!this.isValidUUID(eventId)) {
      throw new BadRequestException('Invalid eventId');
    }

    return this.prisma.eventTicket.findMany({
      where: { eventId: eventId },
      include: {
        ...eventTicketNesting,
      },
    });
  }

  async createEventTicket(dto: CreateEventTicketDto): Promise<EventTicket> {
    return this.prisma.eventTicket.create({
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...eventTicketNesting,
      },
    });
  }

  async editEventTicket(
    id: string,
    dto: EditEventTicketDto,
  ): Promise<EventTicket> {
    return this.prisma.eventTicket.update({
      where: { id: id },
      data: {
        ...this.mapDtoToData(dto),
      },
      include: {
        ...eventTicketNesting,
      },
    });
  }

  async deleteEventTicket(id: string): Promise<EventTicket> {
    return this.prisma.eventTicket.delete({
      where: { id: id },
      include: {
        ...eventTicketNesting,
      },
    });
  }

  private mapDtoToData(dto: CreateEventTicketDto | EditEventTicketDto) {
    return {
      ...dto,
      buyer: this.connectSingle(dto.buyer),
      event: this.connectSingle(dto.event),
      price: dto.price ? dto.price : undefined,
      saleDate: dto.saleDate ? new Date(dto.saleDate) : undefined,
    };
  }
}
