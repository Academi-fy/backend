import * as dto from '../dto';
import pactum from '../pactum';

export const authTests = () => {
  describe('Auth', () => {
    const dto: dto.AuthDto = {
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
};
