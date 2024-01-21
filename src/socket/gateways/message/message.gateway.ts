import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '../../../constants';

@WebSocketGateway(SOCKET_PORT)
export class MessageGateway {
  @WebSocketServer()
  server: any;

  @SubscribeMessage('MESSAGE_SEND')
  handleMessage(@MessageBody() body: string): void {
    this.server.emit('MESSAGE_SEND', body);
  }
}
