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

  /**
   * @description Connect a single id to a Prisma query. This is a one-to-one or
   * one-to-many relationship
   *
   * @exception undefined If the id is not provided, return undefined.
   *
   * @param id The id that will be connected.
   * */
  connectSingle(id: string): { connect: { id: string } } | undefined {
    return id ? { connect: { id } } : undefined;
  }

  /**
   * @description Connect an array of ids to a Prisma query. This is a one-to-many
   * or many-to-many relationship
   *
   * @exception undefined If the array is not provided, return undefined.
   *
   * @param array The array of ids that will be connected.
   * */
  connectArray(array: string[]): { connect: { id: string }[] } | undefined {
    return array ? { connect: array.map((id) => ({ id })) } : undefined;
  }

  /**
   * Check if a string is a valid UUID using a regex pattern.
   * */
  isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  /**
   * Stringify a single object to a JSON string in order for Prisma to store it
   * as JSON in the database.
   *
   * @param content The object to stringify.
   * */
  stringifySingle(content: any): string | undefined {
    return content ? JSON.stringify(content) : undefined;
  }

  /**
   * Stringify an array of objects to JSON strings in order for Prisma to store
   * them as a JSON array in the database.
   *
   * @param content The array of objects to stringify.
   * */
  stringifyArray(content: any[]): string[] | undefined {
    return content ? content.map((item) => JSON.stringify(item)) : undefined;
  }

  /**
   * Call the createChatActivity event on the event emitter to create a
   * new chat activity from a service.
   * The chat activity will be sent to the chat activity service and then
   * broadcasted to all connected clients.
   * */
  async createChatActivity<T>(
    body: GatewayMessage<CreateChatActivityDto<T>>,
  ): Promise<void> {
    this.eventEmitter.emit('createChatActivity', body);
  }
}
