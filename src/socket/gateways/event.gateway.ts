import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { EventService } from '@/rest/event/event.service';
import { Event, School } from '@/@generated-types';
import { CreateEventDto } from '@/rest/event';
import { SchoolService } from '@/rest/school/school.service';
import { PingCreate } from '@/socket/entities/event/ping-create.entity';
import { EventStart } from '@/socket/entities/event/event-start.entity';
import { EventUpdate } from '@/socket/entities/event/event-update.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { GatewayResponse } from '@/socket/entities/gateway-response.entity';

import * as response_codes from '@/response-codes.json';

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
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<CreateEventDto> | Error =
      await this.validateData<GatewayMessage<CreateEventDto>>(
        body,
        GatewayMessage<CreateEventDto>,
      );
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.event.creation.failed,
        data,
      );

    const createdEvent: Event = await this.eventService.createEvent(data.value);
    if (!createdEvent)
      return new GatewayResponse(true, response_codes.event.creation.failed);

    const school: School = await this.schoolService.getSchoolById(
      createdEvent.schoolId,
    );
    if (!school)
      return new GatewayResponse(true, response_codes.school.notFound);

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_EVENT_CREATE', data);
    }

    return new GatewayResponse(false, response_codes.event.creation.success);
  }

  @SubscribeMessage('EVENT_UPDATE')
  async handleEventUpdate(
    @MessageBody() body: GatewayMessage<EventUpdate>,
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<EventUpdate> | Error = await this.validateData<
      GatewayMessage<EventUpdate>
    >(body, GatewayMessage<EventUpdate>);
    if (data instanceof Error)
      return new GatewayResponse(
        true,
        response_codes.event.update.failed,
        data,
      );

    const eventId: string = data.value.eventId;

    const event: Event = await this.eventService.getEventById(eventId);
    if (!event) return new GatewayResponse(true, response_codes.event.notFound);

    const modifiedEvent: Event = await this.eventService.editEvent(
      eventId,
      data.value,
    );
    if (!modifiedEvent)
      return new GatewayResponse(true, response_codes.event.update.failed);

    const school: School = await this.schoolService.getSchoolById(
      modifiedEvent.schoolId,
    );
    if (!school)
      return new GatewayResponse(true, response_codes.school.notFound);

    for (const member of school.members) {
      this.emit(member.id, 'RECEIVED_EVENT_UPDATE', data);
    }

    return new GatewayResponse(false, response_codes.event.update.success);
  }

  @SubscribeMessage('EVENT_PING_CREATE')
  async handleEventPingCreate(
    @MessageBody() body: GatewayMessage<PingCreate>,
  ): Promise<GatewayResponse> {
    return this.handleSimpleEvent<PingCreate>(
      body,
      'EVENT_PING_CREATE',
      response_codes.event.event_action.ping_create,
    );
  }

  @SubscribeMessage('EVENT_START')
  async handleEventStart(
    @MessageBody() body: GatewayMessage<EventStart>,
  ): Promise<GatewayResponse> {
    return this.handleSimpleEvent<EventStart>(
      body,
      'EVENT_START',
      response_codes.event.event_action.event_start,
    );
  }

  @SubscribeMessage('EVENT_END')
  async handleEventEnd(
    @MessageBody() body: GatewayMessage<EventStart>,
  ): Promise<GatewayResponse> {
    return this.handleSimpleEvent<EventStart>(
      body,
      'EVENT_END',
      response_codes.event.event_action.event_end,
    );
  }

  private async handleSimpleEvent<T extends EventUpdate>(
    body: GatewayMessage<T>,
    eventName: string,
    responseCode: {
      success: string;
      failed: string;
    },
  ): Promise<GatewayResponse> {
    const data: GatewayMessage<T> | Error = await this.validateData<
      GatewayMessage<T>
    >(body, GatewayMessage);
    if (data instanceof Error)
      return new GatewayResponse(true, responseCode.failed, data);

    const eventId: string = data.value.eventId;
    const event: Event = await this.eventService.getEventById(eventId);
    if (!event) return new GatewayResponse(true, response_codes.event.notFound);

    const school: School = await this.schoolService.getSchoolById(
      event.schoolId,
    );
    if (!school)
      return new GatewayResponse(true, response_codes.school.notFound);

    for (const member of school.members) {
      this.emit(member.id, `RECEIVED_${eventName}`, data);
    }

    return new GatewayResponse(false, responseCode.success);
  }
}
