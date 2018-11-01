let supertest = require("supertest");
var chai = require("chai");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');
let bodies = require('../helpers/weather.bodies.js');
var should = chai.should();

var server;

describe("/GET", function () {
    it("200 - the weather information to Geographic coordinates", function (done) {
        server = supertest.agent(config.URLGeo);
        server
            .get(config.URLGeo + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.id.should.equal(bodies.geoLocation.id);
                res.body.name.should.equal(bodies.geoLocation.name);
                res.body.cod.should.equal(bodies.geoLocation.cod);
                res.body.coord.should.to.be.an('object');
                res.body.weather.should.to.be.an('array');
                res.body.main.should.to.be.an('object');
                res.body.wind.should.to.be.an('object');
                res.body.clouds.should.to.be.an('object');
                res.body.sys.should.to.be.an('object');
                done();
            });
    });

    it("401 - Unauthorized to get weather to Geographic coordinates", function (done) {
        server = supertest.agent(config.URLGeo);
        server
            .get(config.URLGeo)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(401);
                res.body.cod.should.equal(bodies.unauthorized.cod);
                res.body.message.should.equal(bodies.unauthorized.message);
                done();
            });
    });

    it("400 - BadRequest Geographic coordinates", function (done) {
        server = supertest.agent(config.URLGeoBad);
        server
            .get(config.URLGeoBad + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(400);
                res.body.cod.should.equal(bodies.badRequestGeo.cod);
                res.body.message.should.equal(bodies.badRequestGeo.message);
                done();
            });
    });
});
