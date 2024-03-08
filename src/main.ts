import * as process from 'process';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { registerEnums } from './register-enums';
import { SocketAdapter } from './socket/SocketAdapter';
import { Socket } from 'socket.io';

const appLogger: Logger = new Logger('NestApplication');

const port: number = Number.parseInt(process.env.REST_PORT) || 3000;
async function bootstrap(): Promise<NestApplication> {
  const app: NestApplication = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.useWebSocketAdapter(new SocketAdapter(app));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  registerEnums();

  app.enableCors();

  return app.listen(port);
}
bootstrap().then((): void => {
  appLogger.debug(`Application is listening on port ${port}`);
});

export const clients: Map<string, Socket[]> = new Map<string, Socket[]>();
