import { WebSocketServer } from '@nestjs/websockets';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BadRequestException, Logger } from '@nestjs/common';
import { clients } from '@/main';
import { GatewayMessage } from '@/socket/entities/gateway';
import { CreateChatActivityDto } from '@/rest/chat-activity';
import { ChatActivityGateway } from '@/socket/gateways/chat-activity.gateway';

export class Gateway {
  @WebSocketServer()
  server: any;

  public gatewayLogger: Logger = new Logger('Gateway');

  clients = clients;

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

  async createChatActivity<T>(body: GatewayMessage<CreateChatActivityDto<T>>) {
    return ChatActivityGateway.prototype.handleChatActivityCreate<T>(body);
  }
}
