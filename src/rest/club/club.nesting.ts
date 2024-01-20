import { chatRawNesting } from '../chat';
import { userRawNesting } from '../user';
import { eventRawNesting } from '../event/event.nesting';

export const clubRawNesting = {
  chat: true,
  events: true,
  leaders: true,
  members: true,
  school: false,
};

export const clubNesting = {
  chat: {
    include: {
      ...chatRawNesting,
    },
  },
  events: {
    include: {
      ...eventRawNesting,
    },
  },
  leaders: {
    include: {
      ...userRawNesting,
    },
  },
  members: {
    include: {
      ...userRawNesting,
    },
  },
  school: false,
} as const;
