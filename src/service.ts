import { GatewayMessage } from '@/socket/entities/gateway-message.entity';
import { CreateChatActivityDto } from '@/rest/chat-activity';
import { EventEmitter } from 'events';
import { ValidateData } from '@/validate-data';

export class Service extends ValidateData {
  public eventEmitter: EventEmitter;

  constructor() {
    super();
    this.eventEmitter = new EventEmitter();
  }

  connectSingle(id: string): { connect: { id: string } } | undefined {
    return id ? { connect: { id } } : undefined;
  }

  connectArray(array: string[]): { connect: { id: string }[] } | undefined {
    return array ? { connect: array.map((id) => ({ id })) } : undefined;
  }

  isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  stringifySingle(content: any): string | undefined {
    return content ? JSON.stringify(content) : undefined;
  }

  stringifyArray(content: any[]): string[] | undefined {
    return content ? content.map((item) => JSON.stringify(item)) : undefined;
  }

  async createChatActivity<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<void> {
    this.eventEmitter.emit('createChatActivity', body);
  }
}
