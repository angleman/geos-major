# geos-major [![NPM version](https://badge.fury.io/js/geos-major.png?branch=master)](http://badge.fury.io/js/geos-major) [![Build Status](https://travis-ci.org/angleman/geos-major.png?branch=master)](https://travis-ci.org/angleman/geos-major) [![Dependency Status](https://gemnasium.com/angleman/geos-major.png?branch=master)](https://gemnasium.com/angleman/geos-major) [![License](http://badgr.co/use/MIT.png?bg=%234ed50e)](http://opensource.org/licenses/MIT)

Lightning fast longitude and latitude lookup for country and state codes.

## Install

```
npm install geos-major
```

## Country Lookup

```javascript
var geos = require('geos-major')
  , geo = geos.country('us');
console.log(geo); // { "latitude": 38.0, "longitude": -97.0, "con": "N" }

```

## CloudFlare Lookup
```javascript
var geos = require('geos-major')
  , cf_country = req.headers['cf-ipcountry']
  , geo = geos.country(cf_country); // accessed from the USA
console.log(geo); // { "latitude": 38.0, "longitude": -97.0, "con": "N" }
```

## State Lookup
```javascript
var geos = require('geos-major')
  , geo = geos.state('TX');
console.log(geo); // { "latitude": 31.1060, "longitude": -97.6475 }
```

## Continent Lookup
```javascript
var geos = require('geos-major')
  , country = geos.country('us')
  , continent = geos.continent(country.con);
console.log(continent); // North America
```

## Major attributions
* Country data: [sindresorhus/1341699](https://gist.github.com/sindresorhus/1341699) and [mledoze/countries](https://github.com/mledoze/countries)
* State data: [maxmind](http://dev.maxmind.com/geoip/legacy/codes/state_latlon/)
* Continent data: [wikipedia](https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_continent_%28data_file%29)

## License: MIT
