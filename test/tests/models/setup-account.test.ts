import pactum from '../../pactum';
import * as dto from '../../dto';

const createDto: dto.CreateSetupAccountDto = {
  schoolName: 'Test School',
};

export const setupAccountTests = () => {
  describe('SetupAccount', () => {
    describe('GET /setup-accounts/', () => {
      it('Should get all setup accounts', async () => {
        return pactum
          .spec()
          .get(`/setup-accounts/`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });

    describe('POST /setup-accounts/', () => {
      it('Should create setup account', async () => {
        return pactum
          .spec()
          .post(`/setup-accounts/`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .withJson(createDto)
          .expectStatus(201)
          .stores('setupAccountId', 'id');
      });
    });

    describe('GET /setup-accounts/:id', () => {
      it('Should get setup account by id', async () => {
        return pactum
          .spec()
          .get(`/setup-accounts/$S{setupAccountId}`)
          .withHeaders({
            Authorization: `Bearer $S{userAccessToken}`,
          })
          .expectStatus(200);
      });
    });
  });
};
