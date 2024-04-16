import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Club, Event, User } from '@/@generated-types';
import { ClubEventMutation, ClubUserMutation } from '../entities/club';
import { Gateway } from '../entities/gateway.entity';
import { ClubService } from '@/rest/club/club.service';
import { SOCKET_PORT } from '@/constants';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

@WebSocketGateway(SOCKET_PORT)
export class ClubGateway extends Gateway {
  constructor(private readonly clubService: ClubService) {
    super();
  }

  @SubscribeMessage('CLUB_USER_ADD')
  async handleClubUserAdd(
    @MessageBody() body: GatewayMessage<ClubUserMutation>,
  ): Promise<GatewayMessage<ClubUserMutation> | Error> {
    const data: GatewayMessage<ClubUserMutation> | Error =
      await this.validateData<GatewayMessage<ClubUserMutation>>(
        body,
        GatewayMessage<ClubUserMutation>,
      );
    if (data instanceof Error) return data;

    const clubId: string = data.value.clubId;

    const club: Club = await this.clubService.getClubById(clubId);

    const modifiedClub: Club = await this.clubService.editClub(clubId, {
      members: club.members
        .map((member: User) => member.id)
        .concat(data.value.userId),
    });

    for (const member of modifiedClub.members) {
      this.emit(member.id, 'RECEIVED_CLUB_USER_ADD', modifiedClub);
    }

    return data;
  }

  @SubscribeMessage('CLUB_USER_REMOVE')
  async handleClubUserRemove(
    @MessageBody() body: GatewayMessage<ClubUserMutation>,
  ): Promise<GatewayMessage<ClubUserMutation> | Error> {
    const data: GatewayMessage<ClubUserMutation> | Error =
      await this.validateData<GatewayMessage<ClubUserMutation>>(
        body,
        GatewayMessage<ClubUserMutation>,
      );
    if (data instanceof Error) return data;

    const clubId: string = data.value.clubId;

    const club: Club = await this.clubService.getClubById(clubId);

    const modifiedClub: Club = await this.clubService.editClub(clubId, {
      members: club.members
        .map((member: User) => member.id)
        .filter((memberId: string) => memberId !== data.value.userId),
    });

    for (const member of modifiedClub.members) {
      this.emit(member.id, 'RECEIVED_CLUB_USER_REMOVE', modifiedClub);
    }

    return data;
  }

  @SubscribeMessage('CLUB_EVENT_ADD')
  async handleClubEventAdd(
    @MessageBody() body: GatewayMessage<ClubEventMutation>,
  ): Promise<GatewayMessage<ClubEventMutation> | Error> {
    const data: GatewayMessage<ClubEventMutation> | Error =
      await this.validateData<GatewayMessage<ClubEventMutation>>(
        body,
        GatewayMessage<ClubEventMutation>,
      );
    if (data instanceof Error) return data;

    const clubId: string = data.value.clubId;

    const club: Club = await this.clubService.getClubById(clubId);

    const modifiedClub: Club = await this.clubService.editClub(clubId, {
      members: club.events
        .map((event: Event) => event.id)
        .concat(data.value.eventId),
    });

    for (const member of modifiedClub.members) {
      this.emit(member.id, 'RECEIVED_CLUB_EVENT_ADD', modifiedClub);
    }

    return data;
  }

  @SubscribeMessage('CLUB_EVENT_REMOVE')
  async handleClubEventRemove(
    @MessageBody() body: GatewayMessage<ClubEventMutation>,
  ): Promise<GatewayMessage<ClubEventMutation> | Error> {
    const data: GatewayMessage<ClubEventMutation> | Error =
      await this.validateData<GatewayMessage<ClubEventMutation>>(
        body,
        GatewayMessage<ClubEventMutation>,
      );
    if (data instanceof Error) return data;

    const clubId: string = data.value.clubId;

    const club: Club = await this.clubService.getClubById(clubId);

    const modifiedClub: Club = await this.clubService.editClub(clubId, {
      members: club.events
        .map((event: Event) => event.id)
        .filter((eventId: string) => eventId !== data.value.eventId),
    });

    for (const member of modifiedClub.members) {
      this.emit(member.id, 'RECEIVED_CLUB_EVENT_REMOVE', modifiedClub);
    }

    return data;
  }
}
