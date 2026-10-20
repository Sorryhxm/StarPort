const assert = require('node:assert/strict');
const { sha256For } = require('./checksum');

const a = 'a'.repeat(64);
const b = 'B'.repeat(64);
const sums = `${a}  yt-dlp\n${b} *yt-dlp.exe\r\n${'c'.repeat(64)}  yt-dlp_macos\n`;

assert.equal(sha256For(sums, 'yt-dlp'), a);
assert.equal(sha256For(sums, 'yt-dlp.exe'), 'b'.repeat(64), 'binary-mode marker and CRLF are accepted');
assert.equal(sha256For(sums, 'yt-dlp_macos'), 'c'.repeat(64));
assert.equal(sha256For(sums, 'yt-dlp_linux'), null, 'missing file has no hash');
assert.equal(sha256For(`${'d'.repeat(64)}  ffmpeg.zip\n`, 'ffmpeg.zip'), 'd'.repeat(64));
assert.equal(sha256For('not a checksum file', 'yt-dlp'), null);
