import { Resolver } from '@nestjs/graphql';
import { ChatActivity } from '../../@generated-types';

@Resolver(() => ChatActivity)
export class ChatActivityResolver {}
