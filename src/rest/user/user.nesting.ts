import { chatActivityRawNesting } from '../chat-activity';
import { blackboardRawNesting } from '../blackboard';
import { classRawNesting } from '../class';
import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { eventRawNesting } from '../event';
import { eventTicketRawNesting } from '../event-ticket';
import { userChatRawNesting } from '../user-chat';

export const userRawNesting = {
  badges: true,
  blackboards: true,
  blackboardsReceived: true,
  chatActivitiesCreated: true,
  classes: true,
  clubs: true,
  clubsAsLeader: true,
  courses: true,
  coursesAsTeacher: true,
  events: true,
  eventTickets: true,
  readActivities: true,
  schools: true,
  userAccount: true,
  userChats: true,
};

export const userNesting = {
  badges: true,
  blackboards: {
    include: {
      ...blackboardRawNesting,
    },
  },
  blackboardsReceived: {
    include: {
      ...blackboardRawNesting,
    },
  },
  chatActivitiesCreated: {
    include: {
      ...chatActivityRawNesting,
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
  clubsAsLeader: {
    include: {
      ...clubRawNesting,
    },
  },
  courses: {
    include: {
      ...courseRawNesting,
    },
  },
  coursesAsTeacher: {
    include: {
      ...courseRawNesting,
    },
  },
  events: {
    include: {
      ...eventRawNesting,
    },
  },
  eventTickets: {
    include: {
      ...eventTicketRawNesting,
    },
  },
  readActivities: {
    include: {
      ...chatActivityRawNesting,
    },
  },
  schools: true,
  userAccount: {
    include: {
      user: true,
    },
  },
  userChats: {
    include: {
      ...userChatRawNesting,
    },
  },
};
