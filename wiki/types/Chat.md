# Chat

Chats vereinen [User](https://github.com/Academi-fy/backend/wiki/User) mit [Chat-Activites](https://github.com/Academi-fy/backend/wiki/Chat-Activity)

## Model

```typescript
class Chat {
  activities: ChatActivity[];
  avatar: string;
  clubs: Club[];
  createdAt: Date;
  courses: Course[];
  id: string;
  name: string;
  targets: User[];
  type: string;
  updatedAt: Date;
}
```
> erwähnte Types
> - [ChatActivity](https://github.com/Academi-fy/backend/wiki/Chat-Activity)
> - [Club](https://github.com/Academi-fy/backend/wiki/Club)
> - [Course](https://github.com/Academi-fy/backend/wiki/Course)
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)
> - [User](https://github.com/Academi-fy/backend/wiki/User)

## Zugriff

Auf Chats kann sowohl vom [REST Client](https://github.com/Academi-fy/backend/wiki/REST) sowie vom [Socket](https://github.com/Academi-fy/backend/wiki/Socket) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](https://github.com/Academi-fy/backend/wiki/Controllers) oder den [Resolver](https://github.com/Academi-fy/backend/wiki/Resolvers).

#### Routes

##### getAllChats:
```http request
GET /chat/
```

##### getChat:
```http request
GET /chat/:id
```

##### createChat:
```http request
POST /chat/
```
mit JSON Body: [CreateChatDto](https://github.com/Academi-fy/backend/blob/master/src/rest/chat-activity/dto/create-chat.dto.ts)

##### editChat:
```http request
PATCH /chat/:id
```
mit JSON Body: [EditChatDto](https://github.com/Academi-fy/backend/blob/master/src/rest/chat-activity/dto/edit-chat.dto.ts)

##### deleteChat:
```http request
DELETE /chat/:id
```

### Socket Zugriff

Der Zugriff über den Socket erfolgt durch [GatewayMessages](https://github.com/Academi-fy/backend/wiki/Gateway-Message) in [Gateways](https://github.com/Academi-fy/backend/wiki/Gateway).

[Gateways](https://github.com/Academi-fy/backend/wiki/Gateway) abonnieren Messages bzw. Events, über die dann die Socket-Aktion ausgeführt wird. Für Chat-Activities sind das:

- `CHAT_TARGET_ADD` | `CHAT_TARGET_REMOVE`: User zum Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-target)
- `CHAT_COURSE_ADD` | `CHAT_COURSE_REMOVE`: Course zum Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-course)
- `CHAT_CLUB_ADD` | `CHAT_CLUB_REMOVE`: Club zum Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-club)
- `CHAT_NAME_CHANGE`: Chat [Namen ändern](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-answer)
- `TYPING`: Ein User [tippt](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-answer) im Chat





