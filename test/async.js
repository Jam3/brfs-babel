console.error('Currently unsupported:' + __filename);
/*
var test = require('tape');
var browserify = require('browserify');

var vm = require('vm');
var path = require('path');

test('async', function (t) {
  t.plan(1);
  var b = browserify(__dirname + '/files/async.js');
  b.transform(path.dirname(__dirname));
  b.bundle(function (err, src) {
    if (err) t.fail(err);
    vm.runInNewContext(src, {
      setTimeout: setTimeout,
      console: { log: log }
    });
  });
  function log (msg) { t.equal(msg, 'what\n'); }
});

test('async encoding', function (t) {
  t.plan(1);
  var b = browserify(__dirname + '/files/async_encoding.js');
  b.transform(path.dirname(__dirname));
  b.bundle(function (err, src) {
    if (err) t.fail(err);
    vm.runInNewContext(src, {
      setTimeout: setTimeout,
      console: { log: log }
    });
  });
  function log (msg) { t.equal(msg, '776861740a'); }
});

test('async string encoding', function (t) {
  t.plan(1);
  var b = browserify(__dirname + '/files/async_str_encoding.js');
  b.transform(path.dirname(__dirname));
  b.bundle(function (err, src) {
    if (err) t.fail(err);
    vm.runInNewContext(src, {
      setTimeout: setTimeout,
      console: { log: log }
    });
  });
  function log (msg) { t.equal(msg, '776861740a'); }
});
*/
