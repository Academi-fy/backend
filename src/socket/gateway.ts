import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import * as process from 'process';

const port = Number(process.env.SOCKET_PORT) || 8080;
@WebSocketGateway(port)
export class Gateway {
  @WebSocketServer()
  server: any;

  @SubscribeMessage('MESSAGE_SEND')
  handleMessage(@MessageBody() body: string): void {
    this.server.emit('MESSAGE_SEND', body);
  }
}
