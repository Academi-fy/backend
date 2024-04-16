# Blackboard Events

## Create blackboard

Das `BLACKBOARD_CREATE` Event wird verwendet, um ein neues Blackboard zu erstellen. 

```typescript
interface BlackboardCreate {
    event: 'BLACKBOARD_CREATE',
    data: {
      sender: string,
      value: {
        authors: string[],    // user ids
        coverImage?: string,  // url
        school: string,       // school id
        tags?: string[],      // tag ids
        targets?: string[],   // target ids
        title: string,
        text: string,
    }
  }
}
```

## Update blackboard

Das `BLACKBOARD_UPDATE` Event wird verwendet, um ein Blackboard zu aktualisieren. 

```typescript
interface BlackboardUpdate {
    event: 'BLACKBOARD_UPDATE',
    data: {
      sender: string,
      value: {
        authors?: string[],   // user ids
        coverImage?: string,  // url
        school?: string,      // school id
        tags?: string[],      // tag ids
        targets?: string[],   // target ids
        title?: string,
        text?: string,
    }
  }
}
```

## Delete blackboard

Das `BLACKBOARD_DELETE` Event wird verwendet, um ein Blackboard zu löschen.

```typescript
interface BlackboardDelete {
    event: 'BLACKBOARD_DELETE',
    data: {
      sender: string,
      value: {
        blackboardId: string, // blackboard id
    }
  }
}
```