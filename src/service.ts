export class Service {
  connectSingle(id: string): { connect: { id: string } } | undefined {
    return id ? { connect: { id } } : undefined;
  }

  connectArray(array: string[]): { connect: { id: string }[] } | undefined {
    return array ? { connect: array.map((id) => ({ id })) } : undefined;
  }

  isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  stringifySingle(content: any): string | undefined {
    return content ? JSON.stringify(content) : undefined;
  }

  stringifyArray(content: any[]): string[] | undefined {
    return content ? content.map((item) => JSON.stringify(item)) : undefined;
  }
}
