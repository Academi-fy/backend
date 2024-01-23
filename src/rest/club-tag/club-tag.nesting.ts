import { clubRawNesting } from '../club';

export const clubTagRawNesting = {
  clubs: true,
};

export const clubTagNesting = {
  clubs: {
    include: {
      ...clubRawNesting,
    },
  },
};
