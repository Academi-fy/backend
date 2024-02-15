import { EventInformationItem } from '@/rest/event';
import { IsInstance, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EventInformation {
  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => [EventInformationItem])
  @IsInstance(EventInformationItem)
  items: EventInformationItem[];
}
