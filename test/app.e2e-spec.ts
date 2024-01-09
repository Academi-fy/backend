import pactum from './pactum';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule, Test } from './nestjs';
import { authTests } from './tests/auth.test';
import { userAccountTests } from './tests/models/user-account.test';
import { setupAccountTests } from './tests/models/setup-account.test';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  const port = 3001;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(port);

    prisma = app.get(PrismaService);
    await prisma.cleanDatabase();
    pactum.request.setBaseUrl(`http://localhost:${port}`);
  });

  afterAll(async () => {
    await app.close();
  });

  authTests();
  userAccountTests();
  setupAccountTests();
});
