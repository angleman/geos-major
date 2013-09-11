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

    describe('"us"', function() {
        it('returns USA country data', function() {
            var country = geos.country('us');
            should.exist(country);

            should.exist(country.countryCode);
            country.countryCode.should.equal('US');

            should.exist(country.latitude);
            country.latitude.should.equal(38);

            should.exist(country.longitude);
            country.longitude.should.equal(-97);
        });
    });
});