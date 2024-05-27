import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

@WebSocketGateway(SOCKET_PORT)
export class ErrorGateway extends Gateway {
  @SubscribeMessage('ERROR')
  async handleError(
    @MessageBody() body: GatewayMessage<Error>,
  ): Promise<GatewayMessage<Error> | Error> {
    const error: InternalServerErrorException =
      new InternalServerErrorException({
        information: 'Message received from client is an error.',
        body,
      });

    console.error(error);
    return error;
  }
}
