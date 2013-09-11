// test/main.js
var should = require('should');
var geos   = require('../geos-major.js');

describe('geos-major.state()', function() {
    describe('no arguments', function() {
        it('returns an empty array', function() {
            var state = geos.state();
            should.not.exist(state);
        });
    });

    describe('lowercase country code', function() {
        it('returns Texas country data', function() {
            var state = geos.state('tx');
            should.exist(state);
            state.should.have.keys('latitude', 'longitude');
            state.latitude.should.equal(31.106);
            state.longitude.should.equal(-97.6475);
        });
    });
});