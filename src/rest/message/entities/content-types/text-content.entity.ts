import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.entity';

@InputType()
export class TextContent extends ContentType {
  type: 'TEXT';
}
