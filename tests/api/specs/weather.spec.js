let supertest = require("supertest");
let should = require("should");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');
let bodies = require('../helpers/weather.bodies.js');

var server = supertest.agent(config.URLNameCity);

describe("/GET", function () {
    it("200 - the weather information to London", function (done) {
        console.log(config.URLNameCity + utils.apiID.id)
        server
            .get(config.URLNameCity + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.id.should.equal(bodies.lodonCity.id);
                res.body.name.should.equal(bodies.lodonCity.name);
                res.body.cod.should.equal(bodies.lodonCity.cod);
                done();
            });
    });

    it("401 - Unauthorized to get city", function (done) {
        server
            .get(config.URLNameCity)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(401);
                res.body.cod.should.equal(bodies.unauthorized.cod);
                res.body.message.should.equal(bodies.unauthorized.message);
                done();
            });
    });

    it("404 - Unauthorized to get city", function (done) {
        server = supertest.agent(config.URLNameCityInvalid);
        server
            .get(config.URLNameCity + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(404);
                res.body.cod.should.equal(bodies.notFound.cod);
                res.body.message.should.equal(bodies.notFound.message);
                done();
            });
    });
});
