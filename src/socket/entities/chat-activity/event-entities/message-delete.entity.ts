import { IsString } from 'class-validator';

export class MessageDelete {
  @IsString()
  deleteId: string;
}
