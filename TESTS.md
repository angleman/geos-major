# TOC
   - [geos-major.country()](#geos-majorcountry)
     - [no arguments](#geos-majorcountry-no-arguments)
     - [lowercase country code](#geos-majorcountry-lowercase-country-code)
   - [geos-major.state()](#geos-majorstate)
     - [no arguments](#geos-majorstate-no-arguments)
     - [lowercase country code](#geos-majorstate-lowercase-country-code)
<a name=""></a>
 
<a name="geos-majorcountry"></a>
# geos-major.country()
<a name="geos-majorcountry-no-arguments"></a>
## no arguments
returns an empty array.

```js
var country = geos.country();
should.not.exist(country);
```

<a name="geos-majorcountry-lowercase-country-code"></a>
## lowercase country code
returns USA country data.

```js
var country = geos.country('us');
should.exist(country);

should.exist(country.countryCode);
country.countryCode.should.equal('US');

should.exist(country.latitude);
country.latitude.should.equal(38);

should.exist(country.longitude);
country.longitude.should.equal(-97);
```

<a name="geos-majorstate"></a>
# geos-major.state()
<a name="geos-majorstate-no-arguments"></a>
## no arguments
returns an empty array.

```js
var state = geos.state();
should.not.exist(state);
```

<a name="geos-majorstate-lowercase-country-code"></a>
## lowercase country code
returns Texas country data.

```js
var state = geos.state('tx');
should.exist(state);
state.should.have.keys('latitude', 'longitude');
state.latitude.should.equal(31.106);
state.longitude.should.equal(-97.6475);
```

