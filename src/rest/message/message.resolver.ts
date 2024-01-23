import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from '../../@generated-types';
import { MessageService } from './message.service';
import { CreateMessageDto, EditMessageDto } from './dto';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Query(() => [Message])
  async getAllMessages(): Promise<Message[]> {
    return this.messageService.getAllMessages();
  }

  @Query(() => Message)
  async getMessage(@Args('id') id: string): Promise<Message> {
    return this.messageService.getMessageById(id);
  }

  @Mutation(() => Message)
  async createMessage(
    @Args('message') createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    return this.messageService.createMessage(createMessageDto);
  }

  @Mutation(() => Message)
  async editMessage(
    @Args('id') id: string,
    @Args('message') editMessageDto: EditMessageDto,
  ): Promise<Message> {
    return this.messageService.editMessage(id, editMessageDto);
  }

  @Mutation(() => Message)
  async deleteMessage(@Args('id') id: string): Promise<Message> {
    return this.messageService.deleteMessage(id);
  }
}
