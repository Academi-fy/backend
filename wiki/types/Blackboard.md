# Blackboard

Blackboards sind News-Artikel, die von Lehrern oder auch Schülern bzw. Administratoren veröffentlicht werden können.

Sie werden an bestimmte Gruppen oder auch an die ganze Schule gleichzeitig verschickt. Sie sind unter dem "News"-Tab zu finden. 

## Model

```typescript
class Blackboard {
  _count?: number;
  authors?: User[];
  coverImage: string | null;
  createdAt: Date;
  id: string;
  school?: School;
  schoolId: string;
  tags?: BlackboardTag[];
  targets?: User[];
  text: string | null;
  title: string;
  updatedAt: Date;
}
```
> erwähnte Types
> - [BlackboardTag](Blackboard-Tag.md)
> - [Date](js/Date.md)
> - [School](School.md)
> - [User](User.md)

## Zugriff

Auf Blackboards kann sowohl vom [REST Client](../rest/REST.md) sowie vom [Socket](../socket/Socket.md) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](../rest/Controllers.md) oder den [Resolver](../rest/Resolvers.md).

### Socket Zugriff

Der Zugriff über den Socket erfolgt durch [GatewayMessages](../socket/GatewayMessage.md) durch [Gateways](../socket/Gateway.md).

[Gateways](../socket/Gateway.md) abonnieren Messages bzw. Events, über die dann die Socket-Aktion ausgeführt wird. Für Blackboards sind das:
- `BLACKBOARD_CREATE` - zum Erstellen von Blackboards
- `BLACKBOARD_UPDATE` - zum Aktualisieren von Blackboards
- `BLACKBOARD_DELETE` - zum Löschen von Blackboards

> Ausführungen der Events in: [Blackboard-Events](../socket/events/Blackboard-Events.md)