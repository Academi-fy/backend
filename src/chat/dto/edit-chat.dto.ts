import { IsArray, IsOptional, IsString } from 'class-validator';

export class EditChatDto {
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @IsArray()
  @IsOptional()
  readonly clubs?: string[];

  @IsArray()
  @IsOptional()
  readonly courses?: string[];

  @IsOptional()
  readonly lastActivity?: any; // TODO add Activity type

  @IsArray()
  @IsOptional()
  readonly messages?: string[];

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsArray()
  @IsOptional()
  readonly targets?: string[];

  @IsString()
  @IsOptional()
  readonly type?: string;
}
