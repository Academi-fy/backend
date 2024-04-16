# Club Events

## Add/Remove User

Das `CLUB_USER_ADD` | `CLUB_USER_REMOVE` Event wird verwendet, um einen [User](https://github.com/Academi-fy/backend/wiki/User) zu einem [Club](https://github.com/Academi-fy/backend/wiki/Club) hinzuzufügen | entfernen.

```typescript
interface ClubUserMutation {
    event: `CLUB_USER_ADD` | `CLUB_USER_REMOVE`,
    data: {
      sender: string,
      value: {
        clubId: string,
        userId: string
    }
  }
}
```

## Add/Remove Event

Das `CLUB_EVENT_ADD` | `CLASS_EVENT_REMOVE` Event wird verwendet, um ein [Event](https://github.com/Academi-fy/backend/wiki/Event) zu einem [Club](https://github.com/Academi-fy/backend/wiki/Club) hinzuzufügen | entfernen.

```typescript
interface ClubEventMutation {
    event: `CLUB_EVENT_ADD` | `CLASS_EVENT_REMOVE`,
    data: {
      sender: string,
      value: {
        clubId: string,
        eventId: string
    }
  }
}
```