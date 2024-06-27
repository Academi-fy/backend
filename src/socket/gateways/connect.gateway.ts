import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { Gateway } from '../entities/gateway.entity';
import { Logger } from '@nestjs/common';
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

  afterInit(): void {
    this.connectLogger.debug('Socket Initialized!');
  }

  private getUserId(client: Socket): string {
    const query = client.handshake.query;
    for (const key in query) {
      if (key.toLowerCase() === 'userid') {
        return query[key] as string;
      }
    }
    return null;
  }

  handleConnection(client: Socket): void {
    client.setMaxListeners(20);
    const userId: string = this.getUserId(client);

    const userClients: Socket[] = this.clients.get(userId) || [];
    userClients.push(client);

    this.clients.set(userId, userClients);

    this.connectLogger.log(
      `Client '${userId}': connected (${this.clients.get(userId).length})`,
    );
  }

  handleDisconnect(client: Socket): void {
    const userId: string = this.getUserId(client);

    const userClients: Socket[] = this.clients.get(userId) || [];
    userClients.splice(userClients.indexOf(client), 1);

    this.connectLogger.log(
      `Client '${userId}': disconnected (${this.clients.get(userId).length})`,
    );
  }
}
