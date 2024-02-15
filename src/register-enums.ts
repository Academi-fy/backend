import { registerEnumType } from '@nestjs/graphql';

import { SortOrder } from './prisma';
import {
  ChatActivityType,
  Day,
  GradeLevel,
  SubjectType,
  UserType,
} from './@generated-types';

export function registerEnums() {
  registerEnumType(SortOrder, {
    name: 'SortOrder',
    description: 'The sort order (createdAt, updatedAt)',
  });

  registerEnumType(Day, {
    name: 'Day',
    description: 'Week day',
  });

  registerEnumType(GradeLevel, {
    name: 'GradeLevel',
    description: 'Level of the grade',
  });

  registerEnumType(SubjectType, {
    name: 'SubjectType',
    description: 'Type of the subject',
  });

  registerEnumType(UserType, {
    name: 'UserType',
    description: 'Type of a user',
  });

  registerEnumType(ChatActivityType, {
    name: 'ChatActivityType',
    description: 'Type of a chat activity',
  });
}
