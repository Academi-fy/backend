# Upload

Dateien können auf den Server hochgeladen werden. Diese sind dann öffentlich (also im Rahmen des API Zugriffs) abrufbar.

## Hochladen

Dateien werden über folgenden Pfad hochgeladen:

```http request
POST /upload/upload
```

## Löschen (vorerst nicht aktiv)

Dateien werden über folgenden Pfad gelöscht:

```http request
POST /upload/delete/:fileName
```
> Dabei muss der genaue (!) Dateiname angegeben werden

## Zugriff auf öffentliche Dateien

Öffentliche (also vorher hochgeladene) Dateien können über folgenden Pfad abgerufen werden:

```http request
GET /public/:fileName
```

> Dabei muss der genaue (!) Dateiname angegeben werden
