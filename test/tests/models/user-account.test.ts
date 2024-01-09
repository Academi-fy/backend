import pactum from '../../pactum';
import * as dto from '../../dto';
import { authDto } from '../auth.test';

export const userAccountTests = () => {
  describe('UserAccount', () => {
    describe('GET /user-accounts/me', () => {
      it('Should get the current user account', async () => {
        return pactum
          .spec()
          .get(`/user-accounts/me`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200)
          .expectJsonLike(authDto);
      });
    });

    describe('GET /user-accounts/', () => {
      it('Should get all user accounts', async () => {
        return pactum
          .spec()
          .get(`/user-accounts/`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });

    describe('POST /users-accounts/', () => {
      it('Should create user account', async () => {
        const dto: dto.CreateUserAccountDto = {
          username: 'user-2',
          password: 'user-2-password',
        };
        return pactum
          .spec()
          .post(`/user-accounts/`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('userAccountId', 'id');
      });
    });

    describe('PATCH /user-accounts/:id', () => {
      it('Should edit user', async () => {
        const dto: dto.EditUserAccountDto = {
          username: 'new-username',
          password: 'new-password',
        };
        return pactum
          .spec()
          .patch(`/user-accounts/$S{userAccountId}`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withBody(dto)
          .expectStatus(200);
      });
    });
  });
};
