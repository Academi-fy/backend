# Chat Events

## Add/Remove Target

Das `CHAT_TARGET_ADD` | `CHAT_TARGET_REMOVE` Event wird verwendet, um einen [User](https://github.com/Academi-fy/backend/wiki/User) zu einem [Chat](https://github.com/Academi-fy/backend/wiki/Chat) hinzuzufügen | entfernen.

```typescript
interface ChatTargetMutation {
    event: `CHAT_TARGET_ADD` | `CHAT_TARGET_REMOVE`,
    data: {
      sender: string,
      value: {
        targetId: string,
        chatId: string
    }
  }
}
```

## Add/Remove Course

Das `CHAT_COURSE_ADD` | `CHAT_COURSE_REMOVE` Event wird verwendet, um einen [Course](https://github.com/Academi-fy/backend/wiki/Course) zu einem [Chat](https://github.com/Academi-fy/backend/wiki/Chat) hinzuzufügen | entfernen.

```typescript
interface ChatCourseMutation {
    event: `CHAT_COURSE_ADD` | `CHAT_COURSE_REMOVE`,
    data: {
      sender: string,
      value: {
        courseId: string,
        chatId: string
    }
  }
}
```

## Add/Remove Club

Das `CHAT_CLUB_ADD` | `CHAT_CLUB_REMOVE` Event wird verwendet, um einen [Club](https://github.com/Academi-fy/backend/wiki/Club) zu einem [Chat](https://github.com/Academi-fy/backend/wiki/Chat) hinzuzufügen | entfernen.

```typescript
interface ChatClubMutation {
    event: `CHAT_CLUB_ADD` | `CHAT_CLUB_REMOVE`,
    data: {
      sender: string,
      value: {
        clubId: string,
        chatId: string
    }
  }
}
```

## Change Chat name

Das `CHAT_NAME_CHANGE` Event wird verwendet, um den Namen eines [Chats](https://github.com/Academi-fy/backend/wiki/Chat) zu ändern. Der alte Name wird komplett aus der Datenbank entfernt.

```typescript
interface ChatNameChange {
    event: `CHAT_NAME_CHANGE`,
    data: {
      sender: string,
      value: {
        chatId: string,
        name: string,
        oldName: string
    }
  }
}
```

## Change Chat avatar

Das `CHAT_AVATAR_CHANGE` Event wird verwendet, um den Avatar eines [Chats](https://github.com/Academi-fy/backend/wiki/Chat) zu ändern. Der alte Avatar wird komplett aus der Datenbank entfernt.

```typescript
interface ChatAvatarChange {
    event: `CHAT_AVATAR_CHANGE`,
    data: {
      sender: string,
      value: {
        chatId: string,
        avatar: string, // url
    }
  }
}
```

## Typing

Das `TYPING` Event wird verwendet, um in einem [Chat](https://github.com/Academi-fy/backend/wiki/Chat) anzuzeigen, dass ein [User](https://github.com/Academi-fy/backend/wiki/User) am Schreiben ist.

```typescript
interface ChatAvatarChange {
    event: `CHAT_AVATAR_CHANGE`,
    data: {
      sender: string,
      value: {
        chatId: string,
        typing: boolean,
    }
  }
}
```