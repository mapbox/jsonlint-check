var test = require('tape');
var check = require('..');

var fixture = {
    foo: 'bar',
    baz: 'bar'
};

test('should return true for linted json', function(t) {
    t.equal(check(JSON.stringify(fixture, null, 2), 2), true);
    t.end();
});

test('should return false for unlinted json', function(t) {
    t.equal(check(JSON.stringify(fixture), 2), false);
    t.end();
});

test('should return false for unlinted json with print on', function(t) {
    t.equal(check(JSON.stringify(fixture), 2, false, true), false);
    t.end();
});

test('should return true for linted json with newline required', function(t) {
    t.equal(check(JSON.stringify(fixture, null, 2) + '\n', 2, true), true);
    t.end();
});
