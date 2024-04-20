# Gateway Events

Gateway Events sind der Zugang zum WebSocket. \
Sie werden an den [Socket](https://github.com/Academi-fy/backend/wiki/Socket) übermittelt, um synchrone Daten zu übertragen. \
Die Events sind in verschiedene Kategorien unterteilt, um die Übersicht zu behalten.

Dabei werden sie in Form einer [GatewayMessage](Gateway-Message) übermittelt.

## Inhalt

| [Blackboard](#blackboard-events)                                  | [Chat Activity](#chat-activity-events)                                                                    | [Chat](#chat-events)                                                                                                                                              | [Class](#class-events)                                                                 | 
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `BLACKBOARD_CREATE`<br>`BLACKBOARD_DELETE`<br>`BLACKBOARD_UPDATE` | `ACTIVITY_STAR`<br>`ACTIVITY_UNSTAR`<br>`MESSAGE_ANSWER`<br>`MESSAGE_SEND`<br>`MESSAGE_UPDATE`<br>...TODO | `CHAT_TARGET_ADD`<br>`CHAT_TARGET_REMOVE`<br>`CHAT_COURSE_ADD`<br>`CHAT_COURSE_REMOVE`<br>`CHAT_CLUB_ADD`<br>`CHAT_CLUB_REMOVE`<br>`CHAT_NAME_CHANGE`<br>`TYPING` | `CLASS_COURSE_ADD`<br>`CLASS_COURSE_REMOVE`<br>`CLASS_USER_ADD`<br>`CLASS_USER_REMOVE` |         

| [Cub](#club-events)                                                               | [Course](#course-events)                                       | [Event](#event-events)                                                                  |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `CLUB_USER_ADD`<br>`CLUB_USER_REMOVE`<br>`CLUB_EVENT_ADD`<br>`CLASS_EVENT_REMOVE` | `COURSE_USER_ADD`<br>`COURSE_USER_REMOVE`<br>`COURSE_CHAT_SET` | `EVENT_CREATE`<br>`EVENT_UPDATE`<br>`EVENT_PING_CREATE`<br>`EVENT_START`<br>`EVENT_END` |

## Events

Events sind immer in GROSSBUCHSTABEN geschrieben und immer im Format `<KATEGORIE>_<AKTION>`.

### Received Events

Alle synchronen Events werden nach Übermittlung vom [Socket](https://github.com/Academi-fy/backend/wiki/Socket) an alle relevanten verbundenen Clients geschickt. \
Dabei wird an den Event Namen vorne ein `RECEIVED_` angehängt.

> Beispiel: `BLACKBOARD_CREATE` wird zu `RECEIVED_BLACKBOARD_CREATE`

Received Events schicken immer das modifizierte Objekt zurück.

### [Blackboard Events](https://github.com/Academi-fy/backend/wiki/Blackboard-Events)

Events, die mit dem [Blackboard](https://github.com/Academi-fy/backend/wiki/Blackboard) in Verbindung stehen.

- `BLACKBOARD_CREATE`: Blackboard [erstellen](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#create-blackboard)
- `BLACKBOARD_DELETE`: Blackboard [löschen](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#delete-blackboard)
- `BLACKBOARD_UPDATE`: Blackboard [bearbeiten](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#update-blackboard)

### [Chat Activity Events](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events)

Events, die mit [Chat Activities](https://github.com/Academi-fy/backend/wiki/Chat-Activity) in Verbindung stehen.

- `ACTIVITY_STAR` | `ACTIVITY_UNSTAR`: Nachricht [hervorheben](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#activity-star)
- `MESSAGE_ANSWER`: Auf Nachricht [antworten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-answer)
- `MESSAGE_SEND`: Nachricht [senden](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-send)
- `MESSAGE_UPDATE`: Nachricht [bearbeiten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-update)

1. [ ] &rarr; TODO

### [Chat Events](https://github.com/Academi-fy/backend/wiki/Chat-Events)

Events, die mit [Chats](https://github.com/Academi-fy/backend/wiki/Chat) in Verbindung stehen.

- `CHAT_TARGET_ADD` | `CHAT_TARGET_REMOVE`: User im Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-target) 
  - [&rarr; [User](https://github.com/Academi-fy/backend/wiki/User)]
- `CHAT_COURSE_ADD` | `CHAT_COURSE_REMOVE`: Course im Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-course) 
  - [&rarr; [Course](https://github.com/Academi-fy/backend/wiki/Course)]
- `CHAT_CLUB_ADD` | `CHAT_CLUB_REMOVE`: Club im Chat [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-club) 
  - [&rarr; [Club](https://github.com/Academi-fy/backend/wiki/Club)]
- `CHAT_NAME_CHANGE`: Chat [Namen ändern](https://github.com/Academi-fy/backend/wiki/Chat-Events#change-chat-name)
- `CHAT_NAME_CHANGE`: Chat [Avatar ändern](https://github.com/Academi-fy/backend/wiki/Chat-Events#change-chat-avatar)
- `TYPING`: Im Chat [tippen](https://github.com/Academi-fy/backend/wiki/Chat-Events#typing) 

### [Class Events](https://github.com/Academi-fy/backend/wiki/Class-Events)

Events, die mit [Classes](https://github.com/Academi-fy/backend/wiki/Class) in Verbindung stehen.

- `CLASS_COURSE_ADD` | `CLASS_COURSE_REMOVE`: Course einer Class [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-course) 
  - [&rarr; [Course](https://github.com/Academi-fy/backend/wiki/Course)]
- `CLASS_USER_ADD` | `CLASS_USER_REMOVE`: User einer Class [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Chat-Events#addremove-user) 
  - [&rarr; [User](https://github.com/Academi-fy/backend/wiki/User)]

### [Club Events](https://github.com/Academi-fy/backend/wiki/Club-Events)

Events, die mit [Clubs](https://github.com/Academi-fy/backend/wiki/Clubs) in Verbindung stehen.

- `CLUB_USER_ADD` | `CLUB_USER_REMOVE`: User eines Clubs [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Club-Events#addremove-user)
  - [&rarr; [User](https://github.com/Academi-fy/backend/wiki/User)]
- `CLUB_EVENT_ADD` | `CLUB_EVENT_REMOVE`: Event eines Clubs [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Club-Events#addremove-event)
  - [&rarr; [Event](https://github.com/Academi-fy/backend/wiki/Event)]

### [Course Events](https://github.com/Academi-fy/backend/wiki/Course-Events)

Events, die mit [Courses](https://github.com/Academi-fy/backend/wiki/Course) in Verbindung stehen.

- `COURSE_USER_ADD` | `COURSE_USER_REMOVE`: User eines Courses [hinzufügen/entfernen](https://github.com/Academi-fy/backend/wiki/Course-Events#addremove-user)
  - [&rarr; [User](https://github.com/Academi-fy/backend/wiki/User)]
- `COURSE_CHAT_SET`: Chat eines Courses [setzen](https://github.com/Academi-fy/backend/wiki/Course-Events#set-chat)
  - [&rarr; [Chat](https://github.com/Academi-fy/backend/wiki/User)]

### [Event Events](https://github.com/Academi-fy/backend/wiki/Event-Events)

Events, die mit [Events](https://github.com/Academi-fy/backend/wiki/Event) in Verbindung stehen.

- `EVENT_CREATE`: Ein Event [erstellen](https://github.com/Academi-fy/backend/wiki/Evet-Events#create-event)
- `EVENT_UPDATE`: Ein Event [bearbeiten](https://github.com/Academi-fy/backend/wiki/Evet-Events#create-event)
- `EVENT_PING_CREATE`: Eine [Push-Benachrichtigung](https://github.com/Academi-fy/backend/wiki/Evet-Events#create-ping) für ein Event [verschicken](https://github.com/Academi-fy/backend/wiki/Evet-Events#create-ping)
- `EVENT_START` | `EVENT_END`: Ein Event [manuell starten/beenden](https://github.com/Academi-fy/backend/wiki/Evet-Events#startend-event)