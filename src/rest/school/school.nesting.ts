import { blackboardRawNesting } from '../blackboard';
import { classRawNesting } from '../class';
import { clubRawNesting } from '../club';
import { eventRawNesting } from '../event';
import { gradeRawNesting } from '../grade';
import { userRawNesting } from '../user';
import { subjectRawNesting } from '../subject';

export const schoolRawNesting = {
  blackboards: true,
  classes: true,
  clubs: true,
  events: true,
  grades: true,
  members: true,
  setupAccount: true,
  subjects: true,
};

export const schoolNesting = {
  blackboards: {
    include: {
      ...blackboardRawNesting,
    },
  },
  classes: {
    include: {
      ...classRawNesting,
    },
  },
  clubs: {
    include: {
      ...clubRawNesting,
    },
  },
  events: {
    include: {
      ...eventRawNesting,
    },
  },
  grades: {
    include: {
      ...gradeRawNesting,
    },
  },
  members: {
    include: {
      ...userRawNesting,
    },
  },
  setupAccount: true,
  subjects: {
    include: {
      ...subjectRawNesting,
    },
  },
};
