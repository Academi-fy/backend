import { WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';

export interface EventResponse {
  event: string;
  data: { event: string; body: any };
}

export class Gateway {
  @WebSocketServer()
  server: any;

  clients = new Map<string, Socket>();
  handleConnection(client: { id: string; socket: Socket }) {
    this.clients.set(client.id, client.socket);
  }

  respond(event: string, body: any): EventResponse {
    return {
      event: 'SUCCESS',
      data: { event, body },
    };
  }
}
