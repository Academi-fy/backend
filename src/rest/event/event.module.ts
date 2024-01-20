import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';

@Module({
  providers: [EventService, EventResolver],
  controllers: [EventController],
})
export class EventModule {}
