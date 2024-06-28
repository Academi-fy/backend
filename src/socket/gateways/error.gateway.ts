import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { Response } from '@/response.entity';
import { Logger, Req } from '@nestjs/common';
import { Socket } from 'socket.io';

import * as response_codes from '@/response-codes.json';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

@WebSocketGateway(SOCKET_PORT)
export class ErrorGateway extends Gateway {
  public errorLogger: Logger = new Logger('ErrorGateway');

  @SubscribeMessage('ERROR')
  async handleError(
    @MessageBody() body: GatewayMessage<any>,
    @Req() request: Socket,
  ): Promise<Response> {
    const data: any = await this.validateData<any>(body);

    this.errorLogger.error(
      `Error received from client '${request.handshake.query.userId}': \n${JSON.stringify(data, null, 2)}`,
    );
    return new Response(true, response_codes.special.error_gateway.response, {
      body,
    });
  }
}
