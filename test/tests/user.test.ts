import pactum from '../pactum';
import * as dto from '../dto';

export const userTests = () => {
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
        const dto: dto.EditUserDto = {
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
};
