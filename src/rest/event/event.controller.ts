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
import { EventService } from './event.service';
import { CreateEventDto } from './dto';
import { Event } from '../../@generated-types';

@UseGuards(JwtGuard)
@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAll(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Event> {
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
  async deleteEvent(@Param('id') id: string): Promise<boolean> {
    return this.eventService.deleteEvent(id);
  }
}
