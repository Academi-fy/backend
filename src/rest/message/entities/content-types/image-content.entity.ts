import { InputType } from '@nestjs/graphql';
import { ContentType } from './content-type.entity';

@InputType()
export class ImageContent extends ContentType {
  type: 'IMAGE';
}
