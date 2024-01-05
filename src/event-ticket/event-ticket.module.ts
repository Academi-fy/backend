import { Module } from '@nestjs/common';
import { EventTicketService } from './event-ticket.service';
import { EventTicketController } from './event-ticket.controller';

@Module({
  providers: [EventTicketService],
  controllers: [EventTicketController]
})
export class EventTicketModule {}
