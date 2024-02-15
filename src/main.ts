import * as process from 'process';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { registerEnums } from './register-enums';
import { SocketAdapter } from './socket/SocketAdapter';

const appLogger: Logger = new Logger('NestApplication');

const port: number = Number.parseInt(process.env.REST_PORT) || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
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
bootstrap().then(() => {
  appLogger.log(`Application is listening on port ${port}`);
});
