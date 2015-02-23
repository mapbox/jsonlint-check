Check JSON for linted-ness.

## JavaScript

```javascript
var check = require('jsonlint-check');
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
