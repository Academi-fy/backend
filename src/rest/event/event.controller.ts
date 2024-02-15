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
import { Event } from '../../@generated-types';

import { CreateEventDto } from './dto';
import { JwtGuard } from '../../auth/guard';
import { EventService } from './event.service';

@UseGuards(JwtGuard)
@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<Event> {
    return this.eventService.getEventById(id);
  }

  @Post()
  async createEvent(@Body() dto: CreateEventDto): Promise<Event> {
    return this.eventService.createEvent(dto);
  }

  @Patch(':id')
  async editEvent(
    @Param('id') id: string,
    @Body() dto: CreateEventDto,
  ): Promise<Event> {
    return this.eventService.editEvent(id, dto);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<Event> {
    return this.eventService.deleteEvent(id);
  }
}
