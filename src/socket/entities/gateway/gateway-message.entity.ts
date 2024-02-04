import { IsString } from 'class-validator';

export class GatewayMessage<T> {
  @IsString()
  sender: string;

  @IsString()
  modifyId?: string;

  value: T;
}
