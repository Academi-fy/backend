import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventTicket } from '../../@generated-types';
import { EventTicketService } from './event-ticket.service';
import { CreateEventTicketDto } from './dto';

@Resolver(() => EventTicket)
export class EventTicketResolver {
  constructor(private eventTicketService: EventTicketService) {}

  @Query(() => [EventTicket])
  async getAllEventTickets(
    @Args('eventId', {
      nullable: true,
      description: 'Get all event tickets matching the eventId. OPTIONAL',
    })
    eventId?: string,
  ): Promise<EventTicket[]> {
    if (eventId) {
      return this.eventTicketService.getEventTicketsByEventId(eventId);
    }
    return this.eventTicketService.getAllEventTickets();
  }

  @Query(() => EventTicket)
  async getEventTicket(@Args('id') id: string): Promise<EventTicket> {
    return this.eventTicketService.getEventTicketById(id);
  }

  @Mutation(() => EventTicket)
  async createEventTicket(
    @Args('eventTicket') dto: CreateEventTicketDto,
  ): Promise<EventTicket> {
    return this.eventTicketService.createEventTicket(dto);
  }

  @Mutation(() => EventTicket)
  async editEventTicket(
    @Args('id') id: string,
    @Args('eventTicket') dto: CreateEventTicketDto,
  ): Promise<EventTicket> {
    return this.eventTicketService.editEventTicket(id, dto);
  }

  @Mutation(() => Boolean)
  async deleteEventTicket(@Args('id') id: string): Promise<boolean> {
    return this.eventTicketService.deleteEventTicket(id);
  }
}
