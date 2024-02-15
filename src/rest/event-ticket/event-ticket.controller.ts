import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EventTicket } from '../../@generated-types';

import { CreateEventTicketDto, EditEventTicketDto } from './dto';
import { JwtGuard } from '../../auth/guard';
import { EventTicketService } from './event-ticket.service';

@UseGuards(JwtGuard)
@Controller('event-tickets')
export class EventTicketController {
  constructor(private eventTicketService: EventTicketService) {}

  @Get()
  async getAllEventTickets(): Promise<EventTicket[]> {
    return this.eventTicketService.getAllEventTickets();
  }

  @Get(':id')
  async getEventTicketById(
    @Param('id') eventTicketId: string,
  ): Promise<EventTicket> {
    return this.eventTicketService.getEventTicketById(eventTicketId);
  }

  @Get('event/:id')
  async getEventTicketsByEventId(
    @Param('id') eventId: string,
  ): Promise<EventTicket[]> {
    return this.eventTicketService.getEventTicketsByEventId(eventId);
  }

  @Post()
  async createEventTicket(
    @Body() dto: CreateEventTicketDto,
  ): Promise<EventTicket> {
    return this.eventTicketService.createEventTicket(dto);
  }

  @Patch(':id')
  async editEventTicket(
    @Param('id') id: string,
    @Body() dto: EditEventTicketDto,
  ): Promise<EventTicket> {
    return this.eventTicketService.editEventTicket(id, dto);
  }

  @Delete(':id')
  async deleteEventTicket(@Param('id') id: string): Promise<EventTicket> {
    return this.eventTicketService.deleteEventTicket(id);
  }
}
