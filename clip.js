// แปลงเวลา "ss", "m:ss" หรือ "h:mm:ss" (วินาทีมีทศนิยมได้) เป็นวินาที คืน null ถ้ารูปแบบผิด
function parseClock(text) {
  const value = String(text ?? '').trim();
  if (!/^\d+(:\d{1,2}){0,2}(\.\d+)?$/.test(value)) return null;
  const parts = value.split(':').map(Number);
  if (parts.slice(1).some((part) => part >= 60)) return null;
  return parts.reduce((total, part) => total * 60 + part, 0);
}

// ช่วงเวลาสำหรับ yt-dlp --download-sections เป็นวินาที เช่น "80-165" หรือ null ถ้าช่วงใช้ไม่ได้
function clipSection(section) {
  if (!section) return null;
  const start = parseClock(section.start || '0');
  const end = parseClock(section.end);
  if (start === null || end === null || end <= start) return null;
  return `${start}-${end}`;
}

module.exports = { parseClock, clipSection };
