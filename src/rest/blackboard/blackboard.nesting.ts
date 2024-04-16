import { userRawNesting } from '../user';

export const blackboardRawNesting = {
  authors: true,
  school: false,
  tags: false,
  targets: true,
};

export const blackboardNesting = {
  school: true,
  tags: {
    include: {
      blackboards: true,
    },
  },
  authors: {
    include: {
      ...userRawNesting,
    },
  },
  targets: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
