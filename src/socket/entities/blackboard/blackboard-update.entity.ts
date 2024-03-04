import { IsString } from 'class-validator';
import { EditBlackboardDto } from '@/rest/blackboard';

export class BlackboardUpdate extends EditBlackboardDto {
  @IsString()
  blackboardId: string;
}
