# Course Events

## Add/Remove Course

Das `COURSE_USER_ADD` | `COURSE_USER_REMOVE` Event wird verwendet, um einen [User](https://github.com/Academi-fy/backend/wiki/User) zu einem [Course](https://github.com/Academi-fy/backend/wiki/Course) hinzuzufügen | entfernen.

```typescript
interface ClassCourseMutation {
    event: `COURSE_USER_ADD` | `COURSE_USER_REMOVE`,
    data: {
      sender: string,
      value: {
        courseId: string,
        userId: string
    }
  }
}
```

## Set Chat

Das `COURSE_CHAT_SET` Event wird verwendet, um einen [Chat](https://github.com/Academi-fy/backend/wiki/Chat) einem [Course](https://github.com/Academi-fy/backend/wiki/Course) zuzuordnen.

```typescript
interface ClassCourseMutation {
    event: `COURSE_CHAT_SET`,
    data: {
      sender: string,
      value: {
        courseId: string,
        chatId: string
    }
  }
}
```