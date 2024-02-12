# Academi.fy Backend

The backend part of the Academi.fy app. Here, data is transmitted to the clients via both REST API and GraphQL interface as well as Websockets. The backend is built with Node.js, Express, Prisma, and PostgreSQL.

![backend-tech-stack.png](.resources%2Fbackend-tech-stack.png)

## Installation

Follow these steps to install the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/Academi-fy/backend.git
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
   
3. Create a `.env` file in the root directory of the project and add the following environment variables (example values):

    ```dotenv
    SOCKET_PORT=8080
    REST_PORT=3000
    POSTGRES_PASSWORD=password
    DATABASE_URL=postgresql://username:password@localhost:0000/database?schema=public
    JWT_SECRET=jwt_secret
    ```

    > Replace the values with your own.


4. Install docker and run the following npm script to start the database:

    ```bash
    npm run db:dev:up
    npm run db:dev:restart
    ```

    > This will start a postgres database in a docker container.
   

## Starting the Application

To start the application, run the following command:

```bash
npm run start
```

### For Development

To start the application in development mode, run the following command:

```bash
npm run start:dev
```

Open Prisma Studio. Prisma Studio is a visual editor for the database. You can use it to view and edit data in the database. To open Prisma Studio, run the following command:

```bash
npx prisma studio
```

## Retrieving Data

The backend provides two interfaces for retrieving data: REST API and GraphQL. \
The REST API is available at `http://localhost:port` and the GraphQL interface is available at `http://localhost:port/graphql`.

### WebSocket

> coming soon...