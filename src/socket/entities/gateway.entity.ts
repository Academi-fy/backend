import { WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { clients } from '@/main';
import { CreateChatActivityDto } from '@/rest/chat-activity';
import { Socket } from 'socket.io';
import { EventEmitter } from 'events';
import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { ValidateData } from '@/validate-data';

export class Gateway extends ValidateData {
  @WebSocketServer()
  public server: any;

  public gatewayLogger: Logger = new Logger('Gateway');

  public clients: Map<string, Socket[]> = clients;

  public eventEmitter: EventEmitter;

  constructor() {
    super();
    this.eventEmitter = new EventEmitter();
  }

  /**
   * Calls the eventEmitter to create a chat activity through
   * `handleChatActivityCreate<T>(){}` in **src/socket/gateway/chat-activity-gateway.ts**
   * */
  async createChatActivity<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<void> {
    this.eventEmitter.emit('createChatActivity', body);
  }

  emit(target: string, event: string, data: any): void {
    this.clients.get(target)?.forEach((client: Socket): void => {
      client.emit(event, data);
    });
  }

  emitToList(targets: string[], event: string, data: any): void {
    targets.forEach((target: string): void => {
      this.emit(target, event, data);
    });
  }
}
