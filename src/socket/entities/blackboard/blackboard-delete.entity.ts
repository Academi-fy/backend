import { IsString } from 'class-validator';

export class BlackboardDelete {
  @IsString()
  readonly blackboardId: string;
}
