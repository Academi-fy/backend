import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { ValidationPipe } from '@nestjs/common';
import { registerEnumType } from '@nestjs/graphql';
import { SortOrder } from './prisma';
import { Day, GradeLevel } from './@generated-types';

const port = process.env.REST_PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  registerEnumType(SortOrder, {
    name: 'SortOrder',
    description: 'The sort order (createdAt, updatedAt)',
  });

  registerEnumType(Day, {
    name: 'Day',
    description: 'Week day',
  });

  registerEnumType(GradeLevel, {
    name: 'GradeLevel',
    description: 'Leve of the grade',
  });

  await app.listen(port);
}
bootstrap().then(() => {
  console.log(`Application is listening on port ${port}`);
});
