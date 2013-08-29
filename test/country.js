// test/main.js
var should = require('should');
var geos   = require('../geos-major.js');

describe('geos-major.country()', function() {
    describe('no arguments', function() {
        it('returns an empty array', function() {
            var result = geos.country();
            should.not.exist(result);
        });
    });

    describe('lowercase country code', function() {
        it('returns USA country data', function() {
            var result = geos.country('us');
            should.exist(result);
            result.should.have.keys('lat', 'lon', 'con');
            result.lat.should.equal(38);
            result.lon.should.equal(-97);
            result.con.should.equal('N');
        });
    });
});