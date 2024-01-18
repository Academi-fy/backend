import { userRawNesting } from '../user/user.nesting';

export const chatNesting = {
  clubs: {},
  courses: {},
  messages: {},
  targets: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
