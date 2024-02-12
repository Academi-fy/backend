import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { Gateway } from '../entities';
import { ConflictException, Logger } from '@nestjs/common';
import { Socket } from 'socket.io';

@WebSocketGateway(SOCKET_PORT)
export class ConnectGateway
  extends Gateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {
    super();
  }

  private connectLogger: Logger = new Logger('Connections');

  afterInit(): any {
    this.connectLogger.debug('Socket Initialized!');
  }

  private getUserId(client: Socket): string {
    return client.handshake.query.userId as string;
  }

  handleConnection(client: Socket) {
    const userId: string = this.getUserId(client);

    if (this.clients.has(userId)) {
      client.emit(
        'ERROR',
        new ConflictException(
          `A client with the same id '${userId}' is already connected.`,
        ),
      );
      client.disconnect();
      const clientIp = client.handshake.address;
      return this.connectLogger.warn(
        `Client from IP '${clientIp}' tried to connect with id '${userId}' but was rejected because a client with that id is already connected.`,
      );
    }

    this.clients.set(userId, client);
    this.connectLogger.log(`Client with id '${userId}' connected`);
  }

  handleDisconnect(client: Socket) {
    const userId: string = this.getUserId(client);
    this.clients.delete(userId);
    this.connectLogger.log(`Client with id '${userId}' disconnected`);
  }
}
