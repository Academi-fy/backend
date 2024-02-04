import { Socket } from 'socket.io';
import { IsInstance, IsString } from 'class-validator';

export class GatewayClient {
  @IsString()
  id: string;

  @IsInstance(Socket)
  socket: Socket;
}
