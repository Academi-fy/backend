# Chat-Activity

Chat-Activities sind grundlegend Chat-Nachrichten. \
Sie gehen aber auch darüber hinaus. In einem Chat kann mehr verschickt werden als reine Textnachrichten:
- Nachrichten werden bearbeitet/gelöscht
- Anhänge und [Umfragen](https://github.com/Academi-fy/backend/wiki/Poll) werden angehängt
- [Mitglieder](https://github.com/Academi-fy/backend/wiki/User) werden zum [Chat](https://github.com/Academi-fy/backend/wiki/CHat) hinzugefügt bzw. entfernt
- ... ([weitere Chat-Activity types](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Type))

Daher reichen einfache "Message" Objekte nicht aus. Chronologisch müssen daher alle Chat-Activities der verschiedenen [Types](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Type) in verschiedenen Layouts angezeigt oder auch nicht angezeigt werden bzw. als Push-Benachrichtigung versendet werden.

## Model

```typescript
class ChatActivity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  chatId: string;
  executorId: string;
  answerToId?: string;
  type: ChatActivityType;
  activityContent: any; // hängt vom "type" ab
  starred: boolean;
  chat?: Chat;
  executor?: User;
  readBy?: User[];
  answerTo?: ChatActivity;
  answeredBy?: ChatActivity[];
}
```
> erwähnte Types
> - [ChatActivityType](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Type)
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)
> - [Chat](https://github.com/Academi-fy/backend/wiki/Chat)
> - [User](https://github.com/Academi-fy/backend/wiki/User)

## Zugriff

Auf Chat-Activities kann sowohl vom [REST Client](https://github.com/Academi-fy/backend/wiki/REST) sowie vom [Socket](https://github.com/Academi-fy/backend/wiki/Socket) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](https://github.com/Academi-fy/backend/wiki/Controllers) oder den [Resolver](https://github.com/Academi-fy/backend/wiki/Resolvers).

#### Routes

##### getAllChatActivities:
```http request
GET /chat-activity/
```

##### getChatActivity:
```http request
GET /chat-activity/:id
```

##### createChatActivity:
```http request
POST /chat-activity/
```
mit JSON Body: [CreateChatActivityDto](https://github.com/Academi-fy/backend/blob/master/src/rest/chat-activity/dto/create-chat-activity.dto.ts)

##### editChatActivity:
```http request
PATCH /chat-activity/:id
```
mit JSON Body: [EditChatActivityDto](https://github.com/Academi-fy/backend/blob/master/src/rest/chat-activity/dto/edit-chat-activity.dto.ts)

##### deleteChatActivity:
```http request
DELETE /chat-activity/:id
```

### Socket Zugriff

Der Zugriff über den Socket erfolgt durch [GatewayMessages](https://github.com/Academi-fy/backend/wiki/Gateway-Message) in [Gateways](https://github.com/Academi-fy/backend/wiki/Gateway).

[Gateways](https://github.com/Academi-fy/backend/wiki/Gateway) abonnieren Messages bzw. Events, über die dann die Socket-Aktion ausgeführt wird. Für Chat-Activities sind das:

- `ACTIVITY_STAR` | `ACTIVITY_UNSTAR`: Nachricht [hervorheben](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#activity-star)
- `MESSAGE_ANSWER`: Auf Nachricht [antworten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-answer)
- `MESSAGE_SEND`: Nachricht [senden](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-send)
- `MESSAGE_UPDATE`: Nachricht [bearbeiten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-update)

1. [ ] &rarr; TODO