# Chat Activity Receive

Das `RECEIVED_CHAT_ACTIVITY_CREATE` Event wird vom Socket an alle Clients gesendet, die sich in im relevanten Chat befinden.

```typescript
interface ReceiveChatActivityCreate {
  event: 'RECEIVED_CHAT_ACTIVITY_CREATE',
  data: {
    sender: string,
    value: {
      activityContent: {
        // ... ChatActivity object
      };
      answeredBy?: string;
      answerTo?: string;
      chat: string;
      executor: string;
      readBy?: string[];
      type: ChatActivityType;
      starred?: boolean;
    }
  }
}
```
> erwähnte Types
> - [ChatActivityType](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Type)

# Chat Activity Types

## Activity Star

Das `ACTIVITY_STAR` bzw. `ACTIVITY_UNSTAR` Event wird verwendet, um eine Nachricht in einem Chat mit einem Stern zu markieren bzw. den Stern zu entfernen. \
Mit Stern markierte Nachrichten sind für alle Nutzer des Chats als solche einsehbar und in der Chat-Info zu sehen. Sterne sind mit einem Anpinnen zu vergleichen

```typescript
interface MessageAnswer {
  event: 'ATIVITY_STAR' | 'ACTIVITY_UNSTAR',
  data: {
    sender: string,
    value: {
      activityId: string,
      starred: boolean,
    }
  }
}
```

## Message Answer

Das `MESSAGE_ANSWER` Event wird verwendet, wenn eine Nachricht auf eine andere antwortet.
Der Inhalt der Nachricht können [Abstimmungen](https://github.com/Academi-fy/backend/wiki/Poll), [Dateien](https://github.com/Academi-fy/backend/wiki/Attachment) oder [Text](https://github.com/Academi-fy/backend/wiki/TextMessage) sein.

```typescript
interface MessageAnswer {
  event: 'MESSAGE_ANSWER',
  data: {
    sender: string,
    value: {
      answeredId: string,
      chatId: string,
      content: (Attachment | Poll | TextMessage)[],
    }
  }
}
```

> erwähnte Types
> - [Attachment](https://github.com/Academi-fy/backend/wiki/Attachment)
> - [Poll](https://github.com/Academi-fy/backend/wiki/Poll)
> - [TextMessage](https://github.com/Academi-fy/backend/wiki/TextMessage)

## Message Delete

Das `MESSAGE_DELETE` Event wird verwendet, um eine Nachricht in einem Chat zu löschen. \
Sie wird endgültig gelöscht.

```typescript
interface MessageDelete {
  event: 'MESSAGE_DELETE',
  data: {
    sender: string,
    value: {
      activityId: string
    }
  }
}
```

## Message Send

Das `MESSAGE_SEND` Event wird verwendet, um eine Nachricht in einem Chat zu senden. \
Der Inhalt der Nachricht können [Abstimmungen](https://github.com/Academi-fy/backend/wiki/Poll), [Dateien](https://github.com/Academi-fy/backend/wiki/Attachment) oder [Text](https://github.com/Academi-fy/backend/wiki/TextMessage) sein.

```typescript
interface MessageSend {
  event: 'MESSAGE_SEND',
  data: {
    sender: string,
    value: {
      chatId: string, 
      content: (Attachment | Poll | TextMessage)[],
    }
  }
}
```

> erwähnte Types
> - [Attachment](https://github.com/Academi-fy/backend/wiki/Attachment)
> - [Poll](https://github.com/Academi-fy/backend/wiki/Poll)
> - [TextMessage](https://github.com/Academi-fy/backend/wiki/TextMessage)

## Message Update

Das `MESSAGE_UPDATE` Event wird verwendet, um eine Nachricht im Chat zu aktualisieren. \
Dabei kann nur der `content` bearbeitet werden.

```typescript
interface MessageUpdate {
  event: 'MESSAGE_UPDATE',
  data: {
    sender: string,
    value: {
      activityId: string, 
      chatId: string,
      content: (Attachment | Poll | TextMessage)[],
    }
  }
}
```

> erwähnte Types
> - [Attachment](https://github.com/Academi-fy/backend/wiki/Attachment)
> - [Poll](https://github.com/Academi-fy/backend/wiki/Poll)
> - [TextMessage](https://github.com/Academi-fy/backend/wiki/TextMessage)
