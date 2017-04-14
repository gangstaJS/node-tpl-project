const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const expect = chai.expect();
const should = chai.should();

chai.use(chaiHttp);

describe('Index', () => {

  describe('/GET index', () => {
    it('index', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.to.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

});
