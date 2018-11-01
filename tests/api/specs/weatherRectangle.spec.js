let supertest = require("supertest");
var chai = require("chai");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');
let bodies = require('../helpers/weather.bodies.js');
var should = chai.should();

var server = supertest.agent(config.URLMain);

describe("/GET", function () {
    it("200 - the weather information by Rectanble", function (done) {
        server
            .get(config.URLRecCities + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.cod.should.equal(bodies.rectangle.cod);
                res.body.cnt.should.equal(bodies.rectangle.cnt);
                res.body.list.should.to.be.an('array');
                // First city on this rectangle
                res.body.list[0].id.should.equal(bodies.cityRec1.id);
                res.body.list[0].name.should.equal(bodies.cityRec1.name);
                res.body.list[0].coord.Lat.should.equal(bodies.cityRec1Coord.Lat);
                res.body.list[0].coord.Lon.should.equal(bodies.cityRec1Coord.Lon);
                res.body.list[0].weather.should.to.be.an('array');
                res.body.list[0].main.should.to.be.an('object');
                res.body.list[0].wind.should.to.be.an('object');
                res.body.list[0].clouds.should.to.be.an('object');
                // Second city on this rectangle
                res.body.list[1].id.should.equal(bodies.cityRec2.id);
                res.body.list[1].name.should.equal(bodies.cityRec2.name);
                res.body.list[1].coord.Lat.should.equal(bodies.cityRec2Coord.Lat);
                res.body.list[1].coord.Lon.should.equal(bodies.cityRec2Coord.Lon);
                res.body.list[1].weather.should.to.be.an('array');
                res.body.list[1].main.should.to.be.an('object');
                res.body.list[1].wind.should.to.be.an('object');
                res.body.list[1].clouds.should.to.be.an('object');
                done();
            });
    });

    it("401 - Unauthorized to get by Rectangle", function (done) {
        server
            .get(config.URLRecCities)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(401);
                res.body.cod.should.equal(bodies.unauthorized.cod);
                res.body.message.should.equal(bodies.unauthorized.message);
                done();
            });
    });

    it("400 - Not found to Rectangle", function (done) {
        server
            .get(config.URLRecCitiesInvalid + utils.apiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(400);
                res.body.cod.should.equal(bodies.badRequestRec.cod);
                res.body.message.should.equal(bodies.badRequestRec.message);
                done();
            });
    });
});
