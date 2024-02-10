import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { ValidationPipe } from '@nestjs/common';
import { registerEnums } from './register-enums';
import { SocketAdapter } from './socket/SocketAdapter';

const port = process.env.REST_PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useWebSocketAdapter(new SocketAdapter(app));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  registerEnums();

  app.enableCors();

  await app.listen(port);
}
bootstrap().then(() => {
  console.log(`Application is listening on port ${port}`);
});
