# Blackboard-Tag

Blackboard-Tags beschreiben Kategorien für [Blackboards](Blackboard.md). Sie werden [Blackboards](Blackboard.md) vom Autor zugewiesen. Nach Erstellung können [User](User.md) danach filtern.

## Model

```typescript
class BlackboardTag {
  _count?: number;
  blackboards?: Blackboard[];
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
}
```
> erwähnte Types
> - [Blackboard](Blackboard.md)
> - [Date](js/Date.md)

## Zugriff

Auf Blackboard-Tags kann nur vom [REST Client](../rest/REST.md) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](../rest/Controllers.md) oder den [Resolver](../rest/Resolvers.md).