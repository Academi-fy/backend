import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities';
import { GatewayMessage } from '@/socket/entities/gateway';
import { InternalServerErrorException } from '@nestjs/common';

@WebSocketGateway(SOCKET_PORT)
export class ErrorGateway extends Gateway {
  @SubscribeMessage('ERROR')
  async handleError(
    @MessageBody() body: GatewayMessage<Error>,
  ): Promise<GatewayMessage<Error> | Error> {
    throw new InternalServerErrorException({
      information: 'Message received from client is an error.',
      ...body,
    });
  }
}
