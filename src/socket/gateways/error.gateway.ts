import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { SOCKET_PORT } from '@/constants';
import { Gateway } from '@/socket/entities/gateway.entity';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { GatewayResponse } from '@/socket/entities/gateway-response.entity';

@WebSocketGateway(SOCKET_PORT)
export class ErrorGateway extends Gateway {
  @SubscribeMessage('ERROR')
  async handleError(
    @MessageBody() body: GatewayMessage<Error>,
<<<<<<< Updated upstream
  ): Promise<GatewayMessage<Error> | Error> {
    console.error('ErrorGateway: handleError', body);
    throw new InternalServerErrorException({
      information: 'Message received from client is an error.',
      ...body,
    });
=======
  ): Promise<GatewayResponse> {
    console.error(body);
    return new GatewayResponse(true, '1', body);
>>>>>>> Stashed changes
  }
}
