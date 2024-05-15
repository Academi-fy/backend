import {
  IsArray,
  IsBoolean,
  IsInstance,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PollOption } from '@/rest/chat-activity/entities/content-types/poll.entity';
import { Type } from 'class-transformer';

class PollEditable {
  @IsString()
  question?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PollOption)
  options?: PollOption[];

  @IsBoolean()
  closed?: boolean;

  @IsBoolean()
  result_published?: boolean;
}

export class PollEdit {
  @IsString()
  activityId: string;

  @IsInstance(PollEditable)
  poll: PollEditable;
}
