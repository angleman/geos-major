// test/main.js
var should = require('should');
var geos   = require('../geos-major.js');

describe('geos-major.continent()', function() {
    describe('no arguments', function() {
        it('returns an empty array', function() {
            var result = geos.continent();
            should.not.exist(result);
        });
    });

    describe('USA continent', function() {
        it('returns North America', function() {
            var result = geos.country('us');
            should.exist(result);
            console.log(result);
            result.should.have.property('con');
            var continent = geos.continent(result.con);
            should.exist(continent);
            console.log(continent);
        });
    });
});