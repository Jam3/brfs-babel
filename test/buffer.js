var test = require('tape');
var browserify = require('browserify');

var vm = require('vm');
var path = require('path');

test('sync string encoding', function (t) {
  t.plan(2);
  var b = browserify(__dirname + '/files/buffer.js');
  b.require('buffer', { expose: 'buffer' });
  b.transform(path.dirname(__dirname));
  b.bundle(function (err, src) {
    if (err) t.fail(err);
    var context = {
      setTimeout: setTimeout,
      console: { log: log }
    };
    var buffers = [];
    vm.runInNewContext(src, context);

    t.ok(context.require('buffer').Buffer.isBuffer(buffers[0]), 'isBuffer');
    t.equal(buffers[0].toString('utf8'), '<b>beep boop</b>\n');

    function log (msg) { buffers.push(msg); }
  });
});
