import { blackboardRawNesting } from '../blackboard/blackboard.nesting';

export const blackboardTagNesting = {
  blackboards: {
    include: {
      ...blackboardRawNesting,
    },
  },
} as const;
