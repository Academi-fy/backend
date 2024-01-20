import { userRawNesting } from '../user';
import { eventRawNesting } from '../event';

export const eventTicketRawNesting = {
  buyer: true,
  event: true,
};

export const eventTicketNesting = {
  buyer: {
    include: {
      ...userRawNesting,
    },
  },
  event: {
    include: {
      ...eventRawNesting,
    },
  },
};
