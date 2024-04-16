# Class Events

## Add/Remove Course

Das `CLASS_COURSE_ADD` | `CLASS_COURSE_REMOVE` Event wird verwendet, um einen [Course](https://github.com/Academi-fy/backend/wiki/Course) zu einer [Class](https://github.com/Academi-fy/backend/wiki/Chat) hinzuzufügen | entfernen.

```typescript
interface ClassCourseMutation {
    event: `CLASS_COURSE_ADD` | `CLASS_COURSE_REMOVE`,
    data: {
      sender: string,
      value: {
        classId: string,
        courseId: string
    }
  }
}
```

## Add/Remove User

Das `CLASS_USER_ADD` | `CLASS_USER_REMOVE` Event wird verwendet, um einen [User](https://github.com/Academi-fy/backend/wiki/User) zu einer [Class](https://github.com/Academi-fy/backend/wiki/Chat) hinzuzufügen | entfernen.

```typescript
interface ClassCourseMutation {
    event: `CLASS_USER_ADD` | `CLASS_USER_REMOVE`,
    data: {
      sender: string,
      value: {
        classId: string,
        userId: string
    }
  }
}
```