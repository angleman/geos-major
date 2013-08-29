// test/main.js
var should = require('should');
var geos   = require('../geos-major.js');

describe('geos-major.country()', function() {
    describe('no arguments', function() {
        it('returns an empty array', function() {
            var country = geos.country();
            should.not.exist(country);
        });
    });

    describe('lowercase country code', function() {
        it('returns USA country data', function() {
            var country = geos.country('us');
            should.exist(country);
            country.should.have.keys('lat', 'lon', 'con');
            country.lat.should.equal(38);
            country.lon.should.equal(-97);
            country.con.should.equal('N');
        });
    });
});