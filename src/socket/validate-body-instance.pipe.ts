import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { EventResponse } from './entities';

@Injectable()
export class ValidateBodyInstancePipe<T> implements PipeTransform {
  constructor(private classProvider: () => { new (): T }) {}

  transform(value: EventResponse<T>, metadata: ArgumentMetadata) {
    const expectedClass = this.classProvider();
    if (!(value.body instanceof expectedClass)) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
