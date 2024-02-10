import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { Gateway } from '../entities';
import { Logger } from '@nestjs/common';

@WebSocketGateway(SOCKET_PORT)
export class ConnectGateway
  extends Gateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {
    super();
  }

  private logger: Logger = new Logger('EventsGateway');

  afterInit(server: any): any {
    console.log('Initialized!');
    this.logger.log('Initialized!');
  }

  handleConnection(client) {
    console.log('Connected!');
    // this.clients.set(client.id, client.socket);
  }

  handleDisconnect(client) {
    console.log('Disconnected!');
    // this.clients.delete(client.id);
  }
}
