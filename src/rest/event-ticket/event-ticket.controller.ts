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
import { JwtGuard } from '../../auth/guard';
import { EventTicketService } from './event-ticket.service';
import { CreateEventTicketDto, EditEventTicketDto } from './dto';

@UseGuards(JwtGuard)
@Controller('event-tickets')
export class EventTicketController {
  constructor(private eventTicketService: EventTicketService) {}

  @Get()
  async getAllEventTickets() {
    return this.eventTicketService.getAllEventTickets();
  }

  @Get(':id')
  async getEventTicketsById(@Param('id') eventTicketId: string) {
    return this.eventTicketService.getEventTicketById(eventTicketId);
  }

  @Get('event/:id')
  async getEventTicketsByEventId(@Param('id') eventId: string) {
    return this.eventTicketService.getEventTicketsByEventId(eventId);
  }

  @Post()
  async createEventTicket(@Body() dto: CreateEventTicketDto) {
    return this.eventTicketService.createEventTicket(dto);
  }

  @Patch(':id')
  async editEventTicket(
    @Param('id') id: string,
    @Body() dto: EditEventTicketDto,
  ) {
    return this.eventTicketService.editEventTicket(id, dto);
  }

  @Delete(':id')
  async deleteEventTicket(@Param('id') id: string) {
    return this.eventTicketService.deleteEventTicket(id);
  }
}
