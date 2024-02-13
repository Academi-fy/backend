import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { userChatRawNesting } from '../user-chat';
import { chatActivityRawNesting } from '../chat-activity';

export const chatRawNesting = {
  activities: true,
  clubs: true,
  courses: true,
  targets: true,
} as const;

export const chatNesting = {
  activities: {
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
