export class ValidateData {
  protected async validateData<X extends object>(
    data: any,
    validator: new () => X,
  ): Promise<X | Error> {
    /*const event: X = plainToInstance(validator, data);
    try {
      /!*await validateOrReject(event);*!/
    } catch (errors) {
      console.error(errors);
      const error: BadRequestException = new BadRequestException({
        message: `'Validation failed`,
        event,
        errors,
      });

      console.error(error.stack + JSON.stringify(error, null, 2));
      return error;
    }*/
    return JSON.parse(data.toString());
  }
}
