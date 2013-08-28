geos-major
==========

Lightning fast longitude and latitude lookup for country and state codes.

__Install:__

```
npm install geos-major
```

__Country Lookup:__
```
var geos = require('geos-major')
  , geo = geos.country('us');
console.log(geo); // { "lat": 38.0, "lon": -97.0, "con": "N" }

```

__CloudFlare Lookup:__
```
var geos = require('geos-major')
  , cf_country = req.headers['cf-ipcountry']
  , geo = geos.country(cf_country); // accessed from the USA
console.log(geo); // { "lat": 38.0, "lon": -97.0, "con": "N" }
```

__State Lookup:__
```
var geos = require('geos-major')
  , geo = geos.state('TX');
console.log(geo); // { "lat": 31.1060, "lon": -97.6475 }
```

__Continent Lookup:__
```
var geos = require('geos-major')
  , country = geos.country('us')
  , continent = geos.continent(country.con);
console.log(continent); // North America
```

__Major attributions:__
* Country data: https://gist.github.com/sindresorhus/1341699
* State data: http://dev.maxmind.com/geoip/legacy/codes/state_latlon/
* Continent data: https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_continent_%28data_file%29

__License: MIT__