import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

export class ValidateData {
  async validateData<X extends object>(
    data: any,
    validator: new () => X,
  ): Promise<X | Error> {
    const event: X = plainToInstance(validator, data);
    try {
      await validateOrReject(event);
    } catch (errors) {
      const error: BadRequestException = new BadRequestException({
        message: `'Validation failed`,
        event,
        errors,
      });

      console.error(error.stack + JSON.stringify(error, null, 2));
      return error;
    }
    return event;
  }
}
