let supertest = require("supertest");
var chai = require("chai");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');
let bodies = require('../helpers/weather.bodies.js');
var should = chai.should();

var server = supertest.agent(config.URLMain);;

describe("/GET", function () {
    it("200 - the weather information by Zip code - Default", function (done) {
        server
            .get(config.URLZipDefault + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.id.should.equal(bodies.zipCode.id);
                res.body.name.should.equal(bodies.zipCode.name);
                res.body.cod.should.equal(bodies.zipCode.cod);
                res.body.coord.lon.should.equal(bodies.zipCodeCoord.lon);
                res.body.coord.lat.should.equal(bodies.zipCodeCoord.lat);
                res.body.weather.should.to.be.an('array');
                res.body.main.should.to.be.an('object');
                res.body.wind.should.to.be.an('object');
                res.body.clouds.should.to.be.an('object');
                res.body.sys.should.to.be.an('object');
                done();
            });
    });

    it("401 - Unauthorized to get weather by Zip code", function (done) {
        server
            .get(config.URLZipDefault)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(401);
                res.body.cod.should.equal(bodies.unauthorized.cod);
                res.body.message.should.equal(bodies.unauthorized.message);
                done();
            });
    });

    it("404 - Not found to Zip code", function (done) {
        server
            .get(config.URLZipBad + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(404);
                res.body.cod.should.equal(bodies.notFoundCity.cod);
                res.body.message.should.equal(bodies.notFoundCity.message);
                done();
            });
    });
});
