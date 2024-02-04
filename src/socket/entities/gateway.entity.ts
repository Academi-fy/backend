import { WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { EventResponse } from './gateway';

export class Gateway {
  @WebSocketServer()
  server: any;

  clients = new Map<string, Socket>();
  handleConnection(client: { id: string; socket: Socket }) {
    this.clients.set(client.id, client.socket);
  }

  handleDisconnect(client: { id: string; socket: Socket }) {
    this.clients.delete(client.id);
  }

  emit(target: string, event: string, data: any) {
    this.clients.get(target)?.emit(event, data);
  }

  respond<X>(event: string, data: X): EventResponse<X> {
    return {
      event: event,
      body: data,
    };
  }
}
