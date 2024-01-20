import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.entity';

@InputType()
export class FileContent extends ContentType {
  type: 'FILE';
}
