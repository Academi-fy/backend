import { IsString } from 'class-validator';

export class ChatTargetMutation {
  @IsString()
  targetId: string;

  @IsString()
  chatId: string;
}
