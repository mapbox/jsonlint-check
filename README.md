[![Build Status](https://travis-ci.org/mapbox/jsonlint-check.svg)](https://travis-ci.org/mapbox/jsonlint-check)

Check JSON for linted-ness.

## JavaScript

```javascript
var check = require('@mapbox/jsonlint-check');
var json = '{"foo":"bar","baz":"bin"}';

if (check(json, 2, false)) {
    console.error('json is linted with 2 space indents');
} else {
    console.error('json is not linted');
}
```

## CLI

See USAGE.txt

## Tests

```
npm test
```
