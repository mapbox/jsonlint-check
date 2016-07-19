var test = require('tape');
var path = require('path');
var exec = require('child_process').exec;

var cmdPath = path.join(__dirname, '..', 'bin', 'check');

var unlintedPath = path.join(__dirname, 'unlinted.json');
var lintedPath = path.join(__dirname, 'linted.json');

test('check unlinted doesn\'t print', function(assert) {
  exec([cmdPath, unlintedPath].join(' '), function(err, stdout, stderr) {
    assert.equals(1, err.code);
    assert.equals('', stdout);
    assert.equals(stderr, 'json is not linted\n');
    assert.end();
  });
});

test('check unlinted prints', function(assert) {
  exec([cmdPath, unlintedPath, '-p'].join(' '), function(err, stdout, stderr) {
    assert.equals(1, err.code);
    assert.equals('expected 0: {\nprovided 0: { "foo": "bar", "baz": "bar"}\n', stdout);
    assert.equals(stderr, 'json is not linted\n');
    assert.end();
  });
});

test('check linted doesn\'t print', function(assert) {
  exec([cmdPath, lintedPath, '-p', '-n'].join(' '), function(err, stdout, stderr) {
    assert.ifError(err);
    assert.equals('', stdout);
    assert.equals(stderr, 'json is linted\n');
    assert.end();
  });
});
