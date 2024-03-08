import { WebSocketServer } from '@nestjs/websockets';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BadRequestException, Logger } from '@nestjs/common';
import { clients } from '@/main';
import { CreateChatActivityDto } from '@/rest/chat-activity';
import { Socket } from 'socket.io';
import { EventEmitter } from 'events';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';

export class Gateway {
  @WebSocketServer()
  public server: any;

  public gatewayLogger: Logger = new Logger('Gateway');

  public clients: Map<string, Socket[]> = clients;

  public eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  async createChatActivity<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<void> {
    this.eventEmitter.emit('createChatActivity', body);
  }

  emit(target: string, event: string, data: any) {
    this.clients.get(target)?.forEach((client: Socket) => {
      client.emit(event, data);
    });
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
