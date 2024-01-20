import { userRawNesting } from '../user';
import { clubRawNesting } from '../club';
import { eventTicketRawNesting } from '../event-ticket';

export const eventRawNesting = {
  clubs: true,
  school: false,
  subscribers: true,
  tickets: true,
};
export const eventNesting = {
  clubs: {
    include: {
      ...clubRawNesting,
    },
  },
  school: false,
  subscribers: {
    include: {
      ...userRawNesting,
    },
  },
  tickets: {
    include: {
      ...eventTicketRawNesting,
    },
  },
} as const;
