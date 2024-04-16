# Gateway Events

Gateway Events sind der Zugang zum Websocket. \
Sie werden an den Socket übermittelt, um synchrone Daten zu übertragen. \
Die Events sind in verschiedene Kategorien unterteilt, um die Übersicht zu behalten.

Dabei werden sie in Form einer [GatewayMessage](Gateway-Message) übermittelt.

## Events

Events sind immer in GROSSBUCHSTABEN geschrieben und immer im Format `<KATEGORIE>_<AKTION>`.

### Received Events

Alle synchronen Events werden nach Übermittlung vom Socket an alle relevanten verbundenen Clients geschickt. \
Dabei wird an den Event Namen vorne ein `RECEIVED_` angehängt.

> Beispiel: `BLACKBOARD_CREATE` wird zu `RECEIVED_BLACKBOARD_CREATE`

Received Events schicken immer das modifizierte Objekt zurück.

### Blackboard Events

Events, die mit dem [Blackboard](https://github.com/Academi-fy/backend/wiki/Blackboard) in Verbindung stehen.

- `BLACKBOARD_CREATE`: Blackboard [erstellen](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#create-blackboard)
- `BLACKBOARD_DELETE`: Blackboard [löschen](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#delete-blackboard)
- `BLACKBOARD_UPDATE`: Blackboard [bearbeiten](https://github.com/Academi-fy/backend/wiki/Blackboard-Events#update-blackboard)

### Chat Activity Events

Events, die mit [Chat Activities](https://github.com/Academi-fy/backend/wiki/Chat-Activity) in Verbindung stehen.

- `ACTIVITY_STAR` | `ACTIVITY_UNSTAR`: Nachricht [hervorheben](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#activity-star)
- `MESSAGE_ANSWER`: Auf Nachricht [antworten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-answer)
- `MESSAGE_SEND`: Nachricht [senden](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-send)
- `MESSAGE_UPDATE`: Nachricht [bearbeiten](https://github.com/Academi-fy/backend/wiki/Chat-Activity-Events#message-update)

### Chat Events

### Class Events

### Course Events

### Event Events