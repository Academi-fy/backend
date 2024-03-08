import { IsString } from 'class-validator';

export class MessageDelete {
  @IsString()
  deletedId: string;
}
