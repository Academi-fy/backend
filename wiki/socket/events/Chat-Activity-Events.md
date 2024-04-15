# Chat Activity Events

## Chat Activity Receive

Das `RECEIVED_CHAT_ACTIVITY_CREATE` Event wird vom Socket an alle Clients gesendet, die sich in im relevanten Chat befinden.

```typescript
interface Receive {
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
> - [ChatActivityType](../../types/ChatActivityType.md)

## Message Send

Das `MESSAGE_SEND` Event wird verwendet, um eine Nachricht in einem Chat zu senden. \
Der Inhalt der Nachricht können [Abstimmungen](../../types/messages/Poll.md), [Dateien](../../types/messages/Attachment.md) oder [Text](../../types/messages/TextMessage.md) sein.

```typescript
interface MessageSend {
  event: 'MESSAGE_SEND',
  data: {
    sender: string,
    value: {
      chatId: string, // chat id
      content: (Attachment | Poll | TextMessage)[],
    }
  }
}
```

> erwähnte Types
> - [Attachment](../../types/messages/Attachment.md)
> - [Poll](../../types/messages/Poll.md)
> - [TextMessage](../../types/messages/TextMessage.md)

## Message Update

Das `MESSAGE_UPDATE` Event wird verwendet, um eine Nachricht im Chat zu aktualisieren. \
Dabei kann nur der `content` bearbeitet werden.