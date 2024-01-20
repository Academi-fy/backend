import { Module } from '@nestjs/common';
import { EventTicketService } from './event-ticket.service';
import { EventTicketController } from './event-ticket.controller';
import { EventTicketResolver } from './event-ticket.resolver';

@Module({
  providers: [EventTicketService, EventTicketResolver],
  controllers: [EventTicketController],
})
export class EventTicketModule {}
