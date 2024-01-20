import { chatRawNesting } from '../chat';
import { classRawNesting } from '../class';
import { userRawNesting } from '../user';
import { subjectRawNesting } from '../subject/subject.nesting';

export const courseRawNesting = {
  chat: true,
  classes: true,
  members: true,
  subject: true,
  teacher: true,
} as const;

export const courseNesting = {
  chat: {
    include: {
      ...chatRawNesting,
    },
  },
  classes: {
    include: {
      ...classRawNesting,
    },
  },
  members: {
    include: {
      ...userRawNesting,
    },
  },
  subject: {
    include: {
      ...subjectRawNesting,
    },
  },
  teacher: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
