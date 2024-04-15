# Gateway Events

Gateway Events sind der Zugang zum Websocket. \
Sie werden an den Socket übermittelt, um synchrone Daten zu übertragen. \
Die Events sind in verschiedene Kategorien unterteilt, um die Übersicht zu behalten.

Dabei werden sie in Form einer [GatewayMessage](GatewayMessage.md) übermittelt.

## Events

Events sind immer in GROSSBUCHSTABEN geschrieben und immer im Format `<KATEGORIE>_<AKTION>`.

### Received Events

Alle synchronen Events werden nach Übermittlung vom Socket an alle relevanten verbundenen Clients geschickt. \
Dabei wird an den Event Namen vorne ein `RECEIVED_` angehängt.

> Beispiel: `BLACKBOARD_CREATE` wird zu `RECEIVED_BLACKBOARD_CREATE`

Received Events schicken immer das modifizierte Objekt zurück.

### Blackboard Events

Events, die mit dem Blackboard in Verbindung stehen und für Blackboards relevante Operationen überwachen, die synchron zu Verfügung stehen müssen.

- `BLACKBOARD_CREATE`: [Erstellt](events/Blackboard-Events.md#create-blackboard) ein Blackboard
- `BLACKBOARD_DELETE`: [Löscht](events/Blackboard-Events.md#delete-blackboard) ein Blackboard
- `BLACKBOARD_UPDATE`: [Aktualisiert](events/Blackboard-Events.md#update-blackboard) ein Blackboard

### Chat Activity Events

### Chat Events

### Class Events

### Course Events

### Schul-Event Events