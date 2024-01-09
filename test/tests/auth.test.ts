import * as dto from '../dto';
import pactum from '../pactum';

export const authDto: dto.AuthDto = {
  username: 'test-username',
  password: 'test-password',
};

export const authTests = () => {
  describe('Auth', () => {
    describe('POST /auth/signup', () => {
      it('Should throw if username is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            password: authDto.password,
          })
          .expectStatus(400);
      });

      it('Should throw if password is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            username: authDto.username,
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
          .withBody(authDto)
          .expectStatus(201);
      });
    });

    describe('POST /auth/signin', () => {
      it('Should throw if username is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            password: authDto.password,
          })
          .expectStatus(400);
      });

      it('Should throw if password is empty', async () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            username: authDto.username,
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
          .withBody(authDto)
          .expectStatus(200)
          .stores('userAccessToken', 'access_token');
      });
    });
  });
};
