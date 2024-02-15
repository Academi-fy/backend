import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Event } from '@/@generated-types';
import { EventService } from './event.service';
import { CreateEventDto, EditEventDto } from './dto';

@Resolver(() => Event)
export class EventResolver {
  constructor(private eventService: EventService) {}

  @Query(() => [Event])
  async getAllEvents(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }

  @Query(() => Event)
  async getEvent(@Args('id') id: string): Promise<Event> {
    return this.eventService.getEventById(id);
  }

  @Mutation(() => Event)
  async createEvent(
    @Args('event') createEventDto: CreateEventDto,
  ): Promise<Event> {
    return this.eventService.createEvent(createEventDto);
  }

  @Mutation(() => Event)
  async editEvent(
    @Args('id') id: string,
    @Args('event') editEventDto: EditEventDto,
  ): Promise<Event> {
    return this.eventService.editEvent(id, editEventDto);
  }

  @Mutation(() => Event)
  async deleteEvent(@Args('id') id: string): Promise<Event> {
    return this.eventService.deleteEvent(id);
  }
}
