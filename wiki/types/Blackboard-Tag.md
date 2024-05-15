# Blackboard-Tag

Blackboard-Tags beschreiben Kategorien für [Blackboards](https://github.com/Academi-fy/backend/wiki/Blackboard). Sie werden [https://github.com/Academi-fy/backend/wiki/Blackboards](Blackboard) vom Autor zugewiesen. Nach Erstellung können [https://github.com/Academi-fy/backend/wiki/User](User) danach filtern.

## Model

```typescript
class BlackboardTag {
  blackboards?: Blackboard[];
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
}
```
> erwähnte Types
> - [Blackboard](https://github.com/Academi-fy/backend/wiki/Blackboard)
> - [Date](https://github.com/Academi-fy/backend/wiki/Date)

## Zugriff

Auf Blackboard-Tags kann nur vom [REST Client](https://github.com/Academi-fy/backend/wiki/REST) zugegriffen werden.

### REST Zugriff

Der Zugriff über REST erfolgt entweder über den [Controller](https://github.com/Academi-fy/backend/wiki/Controllers) oder den [Resolver](https://github.com/Academi-fy/backend/wiki/Resolvers).

#### Routes

##### getAllBlackboardTags:
```http request
GET /blackboard-tag/
```

##### getBlackboardTagById:
```http request
GET /blackboard-tag/:id
```

##### createBlackboardTag:
```http request
POST /blackboard-tag/
```
mit JSON Body: [CreateBlackboardTagDto](https://github.com/Academi-fy/backend/blob/master/src/rest/blackboard-tag/dto/create-blackboard-tag.dto.ts)

##### editBlackboardTag:
```http request
PATCH /blackboard-tag/:id
```
mit JSON Body: [EditBlackboardTagDto](https://github.com/Academi-fy/backend/blob/master/src/rest/blackboard-tag/dto/edit-blackboard-tag.dto.ts)

##### deleteBlackboardTag:
```http request
DELETE /blackboard-tag/:id
```