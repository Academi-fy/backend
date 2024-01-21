import { Module } from '@nestjs/common';
import { Gateway } from './gateways/gateway';

@Module({
  providers: [Gateway],
})
export class SocketModule {}
