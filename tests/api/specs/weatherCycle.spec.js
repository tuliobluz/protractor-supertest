let supertest = require("supertest");
var chai = require("chai");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');
let bodies = require('../helpers/weather.bodies.js');
var should = chai.should();

var server = supertest.agent(config.URLBase);

describe("/GET", function () {
    it("200 - the weather information by Cycle", function (done) {
        server
            .get(config.URLCycle + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.message.should.equal(bodies.cycle.message);
                res.body.cod.should.equal(bodies.cycle.cod);
                res.body.count.should.equal(bodies.cycle.count);
                res.body.list.should.to.be.an('array');
                // First city on this rectangle
                res.body.list[0].id.should.equal(bodies.cityCyc1.id);
                res.body.list[0].name.should.equal(bodies.cityCyc1.name);
                res.body.list[0].coord.lat.should.equal(bodies.cityCyc1Coord.lat);
                res.body.list[0].coord.lon.should.equal(bodies.cityCyc1Coord.lon);
                res.body.list[0].weather.should.to.be.an('array');
                res.body.list[0].main.should.to.be.an('object');
                res.body.list[0].wind.should.to.be.an('object');
                res.body.list[0].clouds.should.to.be.an('object');
                // Second city on this rectangle
                res.body.list[1].id.should.equal(bodies.cityCyc2.id);
                res.body.list[1].name.should.equal(bodies.cityCyc2.name);
                res.body.list[1].coord.lat.should.equal(bodies.cityCyc2Coord.lat);
                res.body.list[1].coord.lon.should.equal(bodies.cityCyc2Coord.lon);
                res.body.list[1].weather.should.to.be.an('array');
                res.body.list[1].main.should.to.be.an('object');
                res.body.list[1].wind.should.to.be.an('object');
                res.body.list[1].clouds.should.to.be.an('object');
                done();
            });
    });

    it("401 - Unauthorized to get by Cycle", function (done) {
        server
            .get(config.URLCycle)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(401);
                res.body.cod.should.equal(bodies.unauthorized.cod);
                res.body.message.should.equal(bodies.unauthorized.message);
                done();
            });
    });

    it("400 - Not found to Cycle", function (done) {
        server
            .get(config.URLCycleBad + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(400);
                res.body.cod.should.equal(bodies.cycleBad.cod);
                res.body.message.should.equal(bodies.cycleBad.message);
                done();
            });
    });
});
