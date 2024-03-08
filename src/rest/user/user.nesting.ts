import { chatActivityRawNesting } from '../chat-activity';
import { blackboardRawNesting } from '../blackboard';
import { classRawNesting } from '../class';
import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { eventRawNesting } from '../event';
import { eventTicketRawNesting } from '../event-ticket';
import { userChatRawNesting } from '../user-chat';

export const userRawNesting = {
  activities: true,
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
  schools: false,
  userAccount: true,
  userChats: true,
};

export const userNesting = {
  activities: {
    include: {
      ...chatActivityRawNesting,
    },
  },
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
  schools: false,
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
