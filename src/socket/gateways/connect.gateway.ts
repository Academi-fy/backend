import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { SOCKET_PORT } from 'src/constants';
import { Gateway } from './gateway';
import { Socket } from 'socket.io';

@WebSocketGateway(SOCKET_PORT)
export class ConnectGateway extends Gateway {
  constructor() {
    super();
  }

  @SubscribeMessage('CONNECT')
  onConnect(client: { id: string; socket: Socket }) {
    this.clients.set(client.id, client.socket);
  }

  @SubscribeMessage('DISCONNECT')
  onDisconnect(client: { id: string; socket: Socket }) {
    this.clients.delete(client.id);
  }
}
