import { IsString } from 'class-validator';

export class TextMessage {
  @IsString()
  text: string;

  @IsString()
  type: 'TEXT';
}
