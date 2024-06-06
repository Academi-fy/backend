import { userRawNesting } from '../../../rest/user';

export const userAccountNesting = {
  user: {
    include: {
      ...userRawNesting,
    },
  },
};
