import { IsBoolean, IsObject, IsString } from 'class-validator';

export class Response {
  @IsBoolean()
  error: boolean;

  @IsString()
  code: string;

  @IsObject()
  details?: any;

  constructor(error: boolean, code: string, details?: object) {
    this.error = error;
    this.code = code;
    this.details = typeof details === 'string' ? JSON.parse(details) : details;
  }
}
