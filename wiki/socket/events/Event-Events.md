# Event Events

## Create Event

Das `EVENT_CREATE` Event wird verwendet, um ein [Event](https://github.com/Academi-fy/backend/wiki/Event) zu erstellen.

```typescript
interface EventCreate {
    event: `EVENT_CREATE`,
    data: {
      sender: string,
      value: {
        clubs: string[], // club ids
        description: string,
        endDate: Date,
        host: string,
        information: EventInformation[],
        location: string,
        school: string,
        startDate: Date, //school id
        subscribers: string[], // user ids
        tickets?: string[], // ticket ids
        title: string,
      }
    }
}
```
> erwähnte Types
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)
> - [EventInformation](https://github.com/Academi-fy/backend/wiki/EventInformation)

## Update Event

Das `EVENT_UPDATE` Event wird verwendet, um ein [Event](https://github.com/Academi-fy/backend/wiki/Event) zu bearbeiten.

```typescript
interface EventUpdate {
    event: `EVENT_UPDATE`,
    data: {
      sender: string,
      value: {
        clubs?: string[], // club ids
        description?: string,
        endDate?: Date,
        host?: string,
        information?: EventInformation[],
        location?: string,
        school?: string,
        startDate?: Date, //school id
        subscribers?: string[], // user ids
        tickets?: string[], // ticket ids
        title?: string,
      }
    }
}
```
> erwähnte Types
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)
> - [EventInformation](https://github.com/Academi-fy/backend/wiki/EventInformation)

## Create Ping

Das `EVENT_PING_CREATE` Event wird verwendet, um Ping, also eine Push-Benachrichtigung mit eigenem Text, für ein [Event](https://github.com/Academi-fy/backend/wiki/Event) zu erstellen.

```typescript
interface EventPingCreate {
    event: `EVENT_UPDATE`,
    data: {
      sender: string,
      value: {
        eventId: string,
        pingTitle: string,
        pingDescription: string,
      }
    }
}
```

## Start/End Event

Das `EVENT_START` bzw. `EVENT_END` Event wird verwendet, um ein [Event](https://github.com/Academi-fy/backend/wiki/Event) manuell zu starten bzw. zu beenden.

```typescript
interface EventStart {
    event: `EVENT_START` | `EVENT_END`,
    data: {
      sender: string,
      value: {
        eventId: string,
        start: boolean,
        message: string,
      }
    }
}
```