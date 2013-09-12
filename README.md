# geos-major [![NPM version](https://badge.fury.io/js/geos-major.png?branch=master)](http://badge.fury.io/js/geos-major) [![Build Status](https://travis-ci.org/angleman/geos-major.png?branch=master)](https://travis-ci.org/angleman/geos-major) [![Dependency Status](https://gemnasium.com/angleman/geos-major.png?branch=master)](https://gemnasium.com/angleman/geos-major) [![License](http://badgr.co/use/MIT.png?bg=%234ed50e)](licensemit)

Lightning fast longitude and latitude lookup for country and state codes.

## Install

```
npm install geos-major
```

## Country Lookup

```javascript
var geos = require('geos-major')
  , geo = geos.country('us');
console.log(geo); /* results:  
    countryCode: 'US', 
    countryName: 'United States',
    currency: 'USD,USN,USS',
    continent: 'Americas',
    subContinent: 'Northern America',
    phoneCode: '1',
    latitude: 38,
    longitude: -97 
} */
```

## CloudFlare Lookup
```javascript
var geos = require('geos-major')
  , cf_country = req.headers['cf-ipcountry']
  , geo = geos.country(cf_country); // accessed from the USA
console.log(geo); // countryCode: 'US', countryName: 'United States', ...
```

## State Lookup
```javascript
var geos = require('geos-major')
  , geo = geos.state('TX');
console.log(geo); // { "latitude": 31.1060, "longitude": -97.6475 }
```

## Major attributions
* Country data: [sindresorhus/1341699](https://gist.github.com/sindresorhus/1341699) and [mledoze/countries](https://github.com/mledoze/countries)
* State data: [maxmind](http://dev.maxmind.com/geoip/legacy/codes/state_latlon/)

## License: MIT
