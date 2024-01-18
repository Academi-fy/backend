import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  @IsOptional()
  readonly avatar?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly clubs?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly courses?: string[];

  @IsOptional()
  readonly lastActivity?: any; // TODO add Activity type

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly messages?: string[];

  @IsString()
  readonly name: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly targets?: string[];

  @IsString()
  readonly type: string;
}
