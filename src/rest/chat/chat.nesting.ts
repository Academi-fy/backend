import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { userChatRawNesting } from '../user-chat';
import { chatActivityRawNesting } from '../chat-activity';

export const chatRawNesting = {
  chatActivities: true,
  clubs: true,
  courses: true,
  targets: true,
} as const;

export const chatNesting = {
  chatActivities: {
    include: {
      ...chatActivityRawNesting,
    },
  },
  clubs: {
    include: {
      ...clubRawNesting,
    },
  },
  courses: {
    include: {
      ...courseRawNesting,
    },
  },
  targets: {
    include: {
      ...userChatRawNesting,
    },
  },
} as const;
