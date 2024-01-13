export class Service {
  connectSingle(id: string): { connect: { id: string } } | undefined {
    return id ? { connect: { id } } : undefined;
  }

  connectArray(array: string[]): { connect: { id: string }[] } | undefined {
    return array ? { connect: array.map((id) => ({ id })) } : undefined;
  }
}
