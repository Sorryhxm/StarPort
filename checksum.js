// อ่านไฟล์ checksum รูปแบบ sha256sum ("<hash>  <name>" หรือ "<hash> *<name>") แล้วคืน hash ของไฟล์ที่ต้องการ
function sha256For(text, name) {
  for (const line of String(text).split(/\r?\n/)) {
    const match = line.match(/^([0-9a-f]{64})\s+\*?(.+?)\s*$/i);
    if (match && match[2] === name) return match[1].toLowerCase();
  }
  return null;
}

module.exports = { sha256For };
