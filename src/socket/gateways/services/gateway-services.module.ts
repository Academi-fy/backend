import { Module } from '@nestjs/common';
import { RestModule } from '@/rest/rest.module';
import { HandleChatActivityCreateService } from '@/socket/gateways/services/handle-chat-activity-create.service';
import { CreateChatActivityService } from '@/socket/gateways/services/create-chat-activity.service';

@Module({
  providers: [HandleChatActivityCreateService, CreateChatActivityService],
  imports: [RestModule],
  exports: [HandleChatActivityCreateService, CreateChatActivityService],
})
export class GatewayServicesModule {}
