let supertest = require("supertest");
let should = require("should");
let config = require('../helpers/config.json');
let utils = require('../helpers/utils.js');

var server = supertest.agent(config.URLNameCity);

describe("Weather Information", function () {
    it("GET the weather information to London and 200", function (done) {
        server
            .get(config.URLNameCity + utils.ApiID.id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });
});
