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
> - [BlackboardTag](https://github.com/Academi-fy/backend/wiki/Blackboard-Tag)
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)
> - [School](https://github.com/Academi-fy/backend/wiki/School)
> - [User](https://github.com/Academi-fy/backend/wiki/User)

## Zugriff

Auf Blackboards kann sowohl vom [REST Client](https://github.com/Academi-fy/backend/wiki/REST) sowie vom [Socket](https://github.com/Academi-fy/backend/wiki/Socket) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](https://github.com/Academi-fy/backend/wiki/Controllers) oder den [Resolver](https://github.com/Academi-fy/backend/wiki/Resolvers).

### Socket Zugriff

Der Zugriff über den Socket erfolgt durch [GatewayMessages](https://github.com/Academi-fy/backend/wiki/Gateway-Message) durch [Gateways](https://github.com/Academi-fy/backend/wiki/Gateway).

[Gateways](../socket/Gateway) abonnieren Messages bzw. Events, über die dann die Socket-Aktion ausgeführt wird. Für Blackboards sind das:
- `BLACKBOARD_CREATE` - zum Erstellen von Blackboards
- `BLACKBOARD_UPDATE` - zum Aktualisieren von Blackboards
- `BLACKBOARD_DELETE` - zum Löschen von Blackboards

> Ausführungen der Events in: [Blackboard-Events](https://github.com/Academi-fy/backend/wiki/Blackboard-Events)