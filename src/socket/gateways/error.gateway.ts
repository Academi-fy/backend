import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { GatewayResponse } from '@/socket/entities/gateway-response.entity';
import { Logger, Req } from '@nestjs/common';
import { Socket } from 'socket.io';

import response_codes from '@/response-codes.json';

@WebSocketGateway(SOCKET_PORT)
export class ErrorGateway extends Gateway {
  public errorLogger: Logger = new Logger('ErrorGateway');

  @SubscribeMessage('ERROR')
  async handleError(
    @MessageBody() body: GatewayMessage<Error>,
    @Req() request: Socket,
  ): Promise<GatewayResponse | void> {
    this.errorLogger.error(
      `Error received from client '${request.handshake.query.userId}': \n${body}`,
    );
    return new GatewayResponse(
      true,
      response_codes.special.error_gateway.response,
      body,
    );
  }
}
