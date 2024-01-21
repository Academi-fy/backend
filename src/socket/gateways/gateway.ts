export interface EventResponse {
  event: string;
  data: { event: string; body: any };
}

export class Gateway {
  respond(event: string, body: any): EventResponse {
    return {
      event: 'SUCCESS',
      data: { event, body },
    };
  }
}
