export interface GatewayMessage<T> {
  sender: string;
  modifyId?: string;
  value: T;
}