import { userRawNesting } from '../user';

export const userAccountNesting = {
  user: {
    include: {
      ...userRawNesting,
    },
  },
};
