import pactum from '../../pactum';
import * as dto from '../../dto';

const createDto: dto.CreateBlackboardDto = {
    authors: [""],
    coverImage: "",
    school: "",
    tags: [""],
    targets: [""],
    title: "",
    text: ""
}

export const blackboardTests = () => {
    describe('SetupAccount', () => {
        describe('GET /blackboards/', () => {
          it('Should get all blackboards', async () => {
            return pactum
              .spec()
              .get(`/blackboards/`)
              .withHeaders({
                Authorization: `Bearer $S{userAccessToken}`,
              })
              .expectStatus(200);
          });
        }); 
      }); 
}