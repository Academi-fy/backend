import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities';
import { EventService } from '@/rest/event/event.service';
import { GatewayMessage } from '@/socket/entities/gateway';
import { Event, School } from '@/@generated-types';
import { CreateEventDto } from '@/rest/event';
import { SchoolService } from '@/rest/school/school.service';
import { PingCreate } from '@/socket/entities/event/ping-create.entity';
import { EventStart } from '@/socket/entities/event/event-start.entity';
import { EventUpdate } from '@/socket/entities/event/event-update.entity';

@WebSocketGateway(SOCKET_PORT)
export class EventGateway extends Gateway {
  constructor(
    private readonly eventService: EventService,
    private readonly schoolService: SchoolService,
  ) {
    super();
  }

  @SubscribeMessage('EVENT_CREATE')
  async handleEventCreate(
    @MessageBody() body: GatewayMessage<CreateEventDto>,
  ): Promise<GatewayMessage<CreateEventDto> | Error> {
    const data: GatewayMessage<CreateEventDto> | Error =
      await this.validateData<GatewayMessage<CreateEventDto>>(
        body,
        GatewayMessage<CreateEventDto>,
      );
    if (data instanceof Error) return data;

    const createdEvent: Event = await this.eventService.createEvent(data.value);
    if (!createdEvent)
      throw new Error(`Blackboard could not be created with data: ${data}`);

    const school: School = await this.schoolService.getSchoolById(
      createdEvent.schoolId,
    );
    if (!school)
      throw new Error(`School with id ${createdEvent.schoolId} not found`);

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_EVENT_CREATE', data);
    }

    return data;
  }

  @SubscribeMessage('EVENT_UPDATE')
  async handleEventUpdate(
    @MessageBody() body: GatewayMessage<EventUpdate>,
  ): Promise<GatewayMessage<EventUpdate> | Error> {
    const data: GatewayMessage<EventUpdate> | Error = await this.validateData<
      GatewayMessage<EventUpdate>
    >(body, GatewayMessage<EventUpdate>);
    if (data instanceof Error) return data;

    const eventId: string = data.value.eventId;

    const event: Event = await this.eventService.getEventById(eventId);
    if (!event) throw new Error(`Event with id ${eventId} not found`);

    const modifiedEvent: Event = await this.eventService.editEvent(
      eventId,
      data.value,
    );
    if (!modifiedEvent)
      throw new Error(`Event with id ${eventId} could not be modified`);

    const school: School = await this.schoolService.getSchoolById(
      modifiedEvent.schoolId,
    );
    if (!school)
      throw new Error(`School with id ${modifiedEvent.schoolId} not found`);

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_EVENT_UPDATE', data);
    }

    return data;
  }

  @SubscribeMessage('EVENT_PING_CREATE')
  async handleEventPingCreate(
    @MessageBody() body: GatewayMessage<PingCreate>,
  ): Promise<GatewayMessage<PingCreate> | Error> {
    return this.handleSimpleEvent<PingCreate>(body, 'EVENT_PING_CREATE');
  }

  @SubscribeMessage('EVENT_START')
  async handleEventStart(
    @MessageBody() body: GatewayMessage<EventStart>,
  ): Promise<GatewayMessage<EventStart> | Error> {
    return this.handleSimpleEvent<EventStart>(body, 'EVENT_START');
  }

  @SubscribeMessage('EVENT_END')
  async handleEventEnd(
    @MessageBody() body: GatewayMessage<EventStart>,
  ): Promise<GatewayMessage<EventStart> | Error> {
    return this.handleSimpleEvent<EventStart>(body, 'EVENT_END');
  }

  private async handleSimpleEvent<T extends EventUpdate>(
    body: GatewayMessage<T>,
    eventName: string,
  ): Promise<GatewayMessage<T> | Error> {
    const data: GatewayMessage<T> | Error = await this.validateData<
      GatewayMessage<T>
    >(body, GatewayMessage);
    if (data instanceof Error) return data;

    const eventId: string = data.value.eventId;
    const event: Event = await this.eventService.getEventById(eventId);
    if (!event) throw new Error(`Event with id ${eventId} not found`);

    const school: School = await this.schoolService.getSchoolById(
      event.schoolId,
    );
    if (!school) throw new Error(`School with id ${event.schoolId} not found`);

    for (const member of school.members) {
      this.emit(member.id, `RECEIVED_${eventName}`, data);
    }

    return data;
  }
}
