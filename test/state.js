// test/main.js
var should = require('should');
var geos   = require('../geos-major.js');

describe('geos-major.state()', function() {
    describe('no arguments', function() {
        it('returns an empty array', function() {
            var result = geos.state();
            should.not.exist(result);
        });
    });

    describe('lowercase country code', function() {
        it('returns Texas country data', function() {
            var result = geos.state('tx');
            should.exist(result);
            console.log(result);
            result.should.have.keys('lat', 'lon');
            result.lat.should.equal(31.106);
            result.lon.should.equal(-97.6475);
        });
    });
});