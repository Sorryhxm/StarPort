<div align="center">
  <img src="build/icon.svg" alt="StarPort app icon" width="104" height="104">
  <h1>StarPort</h1>
  <p><strong>ดาวน์โหลดวิดีโอและเสียงในหน้าตาสไตล์เมนู Honkai: Star Rail บน Windows</strong></p>
  <p>
    <a href="https://github.com/Sorryhxm/StarPort/releases/latest">ดาวน์โหลดรุ่นล่าสุด</a>
    · <a href="https://github.com/Sorryhxm/StarPort/issues">แจ้งปัญหา</a>
    · <a href="#english">English</a>
  </p>
</div>

StarPort วางลิงก์วิดีโอแล้วบันทึกเป็นไฟล์ที่ใช้ต่อได้ทันที เห็นภาพปกและความละเอียดที่มีจริงก่อนกดดาวน์โหลด
ตัดเอาเฉพาะช่วงที่ต้องการ ต่อคิวได้หลายลิงก์ และแปลงวิดีโอด้วย GPU ของเครื่อง ทั้งหมดอยู่ในหน้าจอเดียว

## มีอะไรใหม่ใน 1.1.0

- หน้าตาใหม่ทั้งหมด: ท้องฟ้ายามค่ำ แผงกระจกมุมตัด และสีทองบอกสิ่งที่เลือก มีทั้งโหมดมืดและสว่าง
- การ์ดตัวอย่างลิงก์: วางลิงก์แล้วเห็นภาพปก ชื่อ ช่อง ความยาว และความละเอียดสูงสุดที่มีจริง
- ตัดเฉพาะช่วง: ใส่เวลาเริ่มและจบ เช่น `1:20` ถึง `2:45` แล้วได้คลิปตรงเวลา
- คิวดาวน์โหลด: วางหลายลิงก์พร้อมกันหรือกดเพิ่มระหว่างดาวน์โหลด แอปจะทำต่อกันจนหมด
- ประวัติการดาวน์โหลด: เปิดโฟลเดอร์ของไฟล์เก่า หรือใช้ลิงก์เดิมอีกครั้ง
- แจ้งเตือนของ Windows เมื่อดาวน์โหลดเสร็จระหว่างที่ย่อหน้าต่างไว้ และฉาก "วาร์ป" ตอนงานเสร็จ
- ตรวจ checksum ของ yt-dlp และ FFmpeg ทุกครั้งก่อนนำไปใช้
- อัปเดตตัวเองจาก GitHub Releases

## ดาวน์โหลดและติดตั้ง

ไปที่ [หน้า Releases](https://github.com/Sorryhxm/StarPort/releases/latest) แล้วเลือกไฟล์:

- **[StarPort-Setup.exe](https://github.com/Sorryhxm/StarPort/releases/latest/download/StarPort-Setup.exe)**: ติดตั้งลงเครื่อง สร้างทางลัด และอัปเดตตัวเองได้
- **[StarPort.exe](https://github.com/Sorryhxm/StarPort/releases/latest/download/StarPort.exe)**: เปิดใช้ได้เลยโดยไม่ต้องติดตั้ง (แจ้งเมื่อมีรุ่นใหม่ แต่ต้องดาวน์โหลดเอง)

รองรับ Windows 10/11 แบบ x64

ไฟล์ยังไม่ได้เซ็น code signing ครั้งแรกที่เปิด Windows จะขึ้นหน้า "Windows protected your PC"
ให้กด **More info** แล้ว **Run anyway**

ครั้งแรกที่เปิด แอปจะขอติดตั้งเครื่องมือที่ต้องใช้ (ต้องต่ออินเทอร์เน็ต):

- yt-dlp สำหรับดาวน์โหลด (ประมาณ 18 MB)
- FFmpeg สำหรับแปลงวิดีโอและเสียง (ประมาณ 150 MB)

## ความสามารถ

- ดาวน์โหลดจาก YouTube, TikTok, Facebook, X และเว็บไซต์อื่นที่ yt-dlp รองรับ
- วิดีโอ: เลือกความละเอียดตั้งแต่ 480p ถึง 4K หรือสูงสุดที่มี
- ไฟล์วิดีโอที่ได้: H.264 พร้อมตัดต่อ, H.265 ไฟล์เล็กกว่า หรือไฟล์ต้นฉบับไม่แปลง
- เสียงอย่างเดียว: MP3, FLAC หรือ WAV
- แปลงไฟล์ด้วย NVIDIA NVENC, Intel Quick Sync, AMD AMF หรือ CPU โดยเลือกตัวที่เร็วที่สุดให้เอง
- ดาวน์โหลดทั้งเพลย์ลิสต์
- ไม่เขียนทับไฟล์เดิม ถ้าชื่อซ้ำจะบันทึกเป็นเวอร์ชันถัดไป
- ภาษาไทยและอังกฤษ เลือกตามภาษาของเครื่อง

## วิธีใช้งาน

1. วางลิงก์ในช่องลิงก์ (หรือกด Ctrl+V ที่ไหนก็ได้ในหน้าต่าง) แล้วรอการ์ดตัวอย่างขึ้น
2. เลือกวิดีโอหรือเสียง ความละเอียด และไฟล์ที่ต้องการ
3. ถ้าต้องการแค่บางช่วง ติ๊ก **ตัดเฉพาะช่วง** แล้วใส่เวลาเริ่มและจบ
4. กด **เริ่มดาวน์โหลด** ระหว่างที่ดาวน์โหลดอยู่ วางลิงก์ใหม่แล้วกด **เพิ่มเข้าคิว** ได้เลย
5. ดูไฟล์เก่าได้จากปุ่มนาฬิกามุมขวาบน

### เมื่อ YouTube ขอให้ยืนยันว่าไม่ใช่บอท

แอปจะลองวิธีสำรองที่ไม่ต้องเข้าสู่ระบบให้ก่อน ถ้ายังไม่ผ่าน ให้กด **เข้าสู่ระบบ YouTube** ในแอปหนึ่งครั้ง
คุกกี้จะเก็บไว้ในเครื่องเท่านั้น และลบได้ด้วยปุ่ม **ออกจากระบบ YouTube**

## สร้างโปรแกรมจากซอร์สโค้ด

ต้องมี [Node.js](https://nodejs.org/) 22 ขึ้นไป

```bash
npm install
npm start
```

สร้างไฟล์ติดตั้งลงในโฟลเดอร์ `dist/`:

```bash
npm run dist
```

ทดสอบ:

```bash
npm run test:language
npm run test:updater
npm run test:download-path
npm run test:checksum
npm run test:clip
npm run test:startup
```

## โครงสร้างโปรเจกต์

| ไฟล์/โฟลเดอร์ | หน้าที่ |
| --- | --- |
| `main.js` | Electron main process: ดาวน์โหลด ตัวอย่างลิงก์ ตัดช่วง และแปลงไฟล์ด้วย FFmpeg |
| `index.html`, `renderer.js` | หน้าจอสไตล์ Star Rail คิว ประวัติ และฉากวาร์ป |
| `preload.js` | สะพาน API ระหว่างหน้าจอกับ main process |
| `youtube-pot.js` | PO Token และคุกกี้สำหรับ YouTube |
| `checksum.js`, `clip.js` | ตรวจ checksum และแปลงเวลาของช่วงที่ตัด |
| `app-updater.js` | อัปเดตตัวเองจาก GitHub Releases |
| `download-path.js` | ตั้งชื่อไฟล์ไม่ให้ทับของเดิม |
| `vendor/`, `THIRD_PARTY_NOTICES.md` | ปลั๊กอินที่แนบมาและไลเซนส์ |
| `build/` | ไอคอนและสคริปต์ตัวติดตั้ง |
| `test-*.js` | ชุดทดสอบ |

## ความเป็นส่วนตัว

StarPort ไม่มี analytics และไม่ส่งข้อมูลการใช้งานหรือชื่อไฟล์ไปที่ไหน แอปต่อเน็ตเฉพาะเพื่อ:

- ดาวน์โหลดและดูตัวอย่างลิงก์ที่คุณวาง ผ่าน yt-dlp
- YouTube: สร้าง PO Token ผ่านเซิร์ฟเวอร์ของ Google และใช้คุกกี้ถ้าคุณเข้าสู่ระบบในแอป
- ติดตั้งและอัปเดต yt-dlp และ FFmpeg จาก GitHub
- ตรวจรุ่นใหม่ของ StarPort จาก GitHub Releases

## หมายเหตุ

StarPort พัฒนาต่อจาก [FramePort](https://github.com/CandyCoreProj/FramePort) ของ CandyCore (MIT)
ใช้ [yt-dlp](https://github.com/yt-dlp/yt-dlp) และ [FFmpeg](https://ffmpeg.org/) และแนบปลั๊กอิน
[bgutil-ytdlp-pot-provider](https://github.com/Brainicism/bgutil-ytdlp-pot-provider) (GPL-3.0) โดยไม่แก้ไข
ดูรายละเอียดใน [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)

ดาวน์โหลดเฉพาะเนื้อหาที่คุณมีสิทธิ์ใช้ และปฏิบัติตามข้อกำหนดของแต่ละเว็บไซต์
ผู้พัฒนาไม่รับผิดชอบต่อการใช้งานที่ผิดกฎหมายหรือละเมิดลิขสิทธิ์

Honkai: Star Rail เป็นเครื่องหมายของ HoYoverse StarPort เป็นโปรเจกต์ของแฟน ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก HoYoverse

---

<a id="english"></a>

## English

StarPort turns a pasted video link into a file you can use right away. See the thumbnail and the real available
quality before you download, keep only the part you need, queue several links, and convert with your GPU, all from
one screen with a Honkai: Star Rail-inspired menu.

### What's new in 1.1.0

- A new look: night sky, cut-corner glass panels and gold highlights, in dark and light themes
- Link preview card with thumbnail, title, channel, length and the highest quality actually available
- Download a section: enter a start and end time like `1:20` to `2:45` and get a frame-accurate clip
- Download queue: paste several links at once or add more while a download runs
- Download history: open old files in their folder or reuse a link
- A Windows notification when a download finishes in the background, and a "warp" finish screen
- yt-dlp and FFmpeg are checked against their published checksums before use
- Updates itself from GitHub Releases

### Download

Get the files from the [Releases page](https://github.com/Sorryhxm/StarPort/releases/latest):

- **[StarPort-Setup.exe](https://github.com/Sorryhxm/StarPort/releases/latest/download/StarPort-Setup.exe)**: installs StarPort, adds shortcuts, and updates itself
- **[StarPort.exe](https://github.com/Sorryhxm/StarPort/releases/latest/download/StarPort.exe)**: runs without installing (tells you about new versions, but you download them yourself)

Requires Windows 10/11 x64.

The files are not code signed yet. The first time you open one, Windows shows "Windows protected your PC".
Click **More info**, then **Run anyway**.

On first launch the app installs the tools it needs (internet required): yt-dlp for downloading (about 18 MB)
and FFmpeg for conversion (about 150 MB).

### Features

- Downloads from YouTube, TikTok, Facebook, X and every other site yt-dlp supports
- Video from 480p up to 4K, or the best available
- Output as edit-ready H.264, smaller H.265, or the original file without conversion
- Audio only as MP3, FLAC or WAV
- Converts with NVIDIA NVENC, Intel Quick Sync, AMD AMF or the CPU, picking the fastest one automatically
- Whole playlists
- Never overwrites a file; a repeated name is saved as the next version
- Thai and English, following your device language

### Use the app

1. Paste a link into the link field (or press Ctrl+V anywhere in the window) and wait for the preview card.
2. Choose video or audio, the quality, and the output file type.
3. To keep only part of the video, tick **Download a section** and enter a start and end time.
4. Click **Start download**. While it runs, paste another link and click **Add to queue**.
5. Find earlier downloads with the clock button at the top right.

#### When YouTube asks you to confirm you are not a bot

StarPort first retries with methods that need no sign-in. If that still fails, click **Sign in to YouTube** in
the app once. The cookies stay on your computer, and **Sign out of YouTube** removes them.

### Build from source

Requires [Node.js](https://nodejs.org/) 22 or later.

```bash
npm install
npm start
```

Build the installer into `dist/`:

```bash
npm run dist
```

To publish a release, bump `version` in `package.json`, run `npm run dist`, and upload
`StarPort-Setup.exe`, `StarPort-Setup.exe.blockmap`, `latest.yml` and `StarPort.exe` from `dist/` to a release
tagged `v<version>`.

### Project structure

| File/folder | Purpose |
| --- | --- |
| `main.js` | Electron main process: downloads, link preview, sections, FFmpeg conversion |
| `index.html`, `renderer.js` | Star Rail-style interface, queue, history and warp screen |
| `preload.js` | API bridge between the interface and the main process |
| `youtube-pot.js` | YouTube PO Tokens and cookies |
| `checksum.js`, `clip.js` | Checksum verification and section time parsing |
| `app-updater.js` | Self-update from GitHub Releases |
| `download-path.js` | File naming that never overwrites |
| `vendor/`, `THIRD_PARTY_NOTICES.md` | Bundled plugin and licenses |
| `build/` | Icon and installer scripts |
| `test-*.js` | Tests |

### Privacy

StarPort has no analytics and does not send your usage data or file names anywhere. It connects to the network only to:

- Download and preview the links you paste, through yt-dlp
- YouTube: generate PO Tokens through Google's servers, and use your cookies if you sign in in the app
- Install and update yt-dlp and FFmpeg from GitHub
- Check GitHub Releases for new StarPort versions

### Notes

StarPort is based on [FramePort](https://github.com/CandyCoreProj/FramePort) by CandyCore (MIT). It uses
[yt-dlp](https://github.com/yt-dlp/yt-dlp) and [FFmpeg](https://ffmpeg.org/), and bundles the unmodified
[bgutil-ytdlp-pot-provider](https://github.com/Brainicism/bgutil-ytdlp-pot-provider) plugin (GPL-3.0). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Only download content you have the right to use, and follow each website's terms. The developer is not
responsible for illegal use or copyright infringement.

Honkai: Star Rail is a trademark of HoYoverse. StarPort is a fan project and is not affiliated with or endorsed by
HoYoverse.

## License

MIT, see [LICENSE](LICENSE).
