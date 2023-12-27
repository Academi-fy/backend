import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
import { AuthDto } from '../src/auth/dto';
import { EditUserDto } from '../src/user/dto';
import { CreateBookmarkDto } from '../src/bookmark/dto';

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

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'test@email.com',
      password: 'test-password',
    };
    describe('POST /auth/signup', () => {
      it('Should throw if email is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('Should throw if email is not valid', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({ ...dto, email: 'invalid-email' })
          .expectStatus(400);
      });

      it('Should throw if password is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('Should throw if now body provided', async () => {
        return pactum.spec().post(`/auth/signup`).expectStatus(400);
      });

      it('Should return an access token', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('POST /auth/signin', () => {
      it('Should throw if email is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('Should throw if email is not valid', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({ ...dto, email: 'invalid-email' })
          .expectStatus(400);
      });

      it('Should throw if password is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('Should throw if now body provided', async () => {
        return pactum.spec().post(`/auth/signin`).expectStatus(400);
      });

      it('Should return an access token', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody(dto)
          .expectStatus(200)
          .stores('userAccessToken', 'access_token');
      });
    });
  });
  describe('User', () => {
    describe('GET /users/me', () => {
      it('Should get the current user', async () => {
        return pactum
          .spec()
          .get(`/users/me`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });
    describe('PATCH /users/:id', () => {
      it('Should edit user', async () => {
        const dto: EditUserDto = {
          firstName: 'new-first-name',
          lastName: 'new-last-name',
        };
        return pactum
          .spec()
          .patch(`/users`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.lastName);
      });
    });
  });
  describe('Bookmark', () => {
    describe('GET /bookmarks', () => {
      it('Should get empty bookmark array', async () => {
        return pactum
          .spec()
          .get(`/bookmarks`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });

    describe('POST /bookmarks', () => {
      const dto: CreateBookmarkDto = {
        title: 'test-title',
        link: 'https://test.com',
      };

      it('Should create a bookmark', async () => {
        return pactum
          .spec()
          .post(`/bookmarks`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('bookmarkId', 'id');
      });
    });

    describe('GET /bookmarks', () => {
      it('Should get all bookmarks', async () => {
        return pactum
          .spec()
          .get(`/bookmarks`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });

    describe('GET /bookmarks/:id', () => {
      it('Should get bookmark by id', async () => {
        return pactum
          .spec()
          .get(`/bookmarks/{id}`)
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });
    describe('PATCH /bookmarks/:id', () => {});
    describe('DELETE /bookmarks/:id', () => {
      // code 204
    });
  });
});
