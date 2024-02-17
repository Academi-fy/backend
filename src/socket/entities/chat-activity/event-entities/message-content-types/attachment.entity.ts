import { IsString } from 'class-validator';

export class Attachment {
  @IsString()
  attachment: string;

  @IsString()
  type: 'ATTACHMENT';
}
