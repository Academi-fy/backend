import { WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BadRequestException, Logger } from '@nestjs/common';

export class Gateway {
  @WebSocketServer()
  server: any;

  clients: Map<string, Socket> = new Map<string, Socket>();

  public gatewayLogger: Logger = new Logger('Gateway');

  emit(target: string, event: string, data: any) {
    this.clients.get(target)?.emit(event, data);
  }

  async validateData<X extends object>(
    data: any,
    validator: new () => X,
  ): Promise<X | Error> {
    const event: X = plainToInstance(validator, data);
    try {
      await validateOrReject(event);
    } catch (errors) {
      const error: BadRequestException = new BadRequestException({
        message: `'Validation failed`,
        event,
        errors,
      });

      this.gatewayLogger.error(error.stack + JSON.stringify(error, null, 2));
      return error;
    }
    return event;
  }
}
