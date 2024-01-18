import { Resolver } from '@nestjs/graphql';
import { Chat } from '../../@generated-types';

@Resolver(() => Chat)
export class ChatResolver {}
