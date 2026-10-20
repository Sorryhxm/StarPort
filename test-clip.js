const assert = require('node:assert/strict');
const { parseClock, clipSection } = require('./clip');

assert.equal(parseClock('45'), 45);
assert.equal(parseClock('1:20'), 80);
assert.equal(parseClock('01:02:03'), 3723);
assert.equal(parseClock('2:05.5'), 125.5);
assert.equal(parseClock(' 0:30 '), 30, 'surrounding spaces are ignored');
for (const bad of ['', '1:60', '1:2:3:4', 'abc', '-5', '1.5:20', '1::2']) {
  assert.equal(parseClock(bad), null, `"${bad}" should be rejected`);
}

assert.equal(clipSection({ start: '1:20', end: '2:45' }), '80-165');
assert.equal(clipSection({ start: '', end: '10' }), '0-10', 'empty start means the beginning');
assert.equal(clipSection({ start: '2:00', end: '1:00' }), null, 'end must be after start');
assert.equal(clipSection({ start: '0', end: '' }), null, 'end is required');
assert.equal(clipSection(null), null);
