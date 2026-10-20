# StarPort

Video and audio downloader with edit-ready conversion, for Windows and macOS, in Thai and English.

StarPort is based on [FramePort](https://github.com/CandyCoreProj/FramePort) by CandyCore (MIT). It keeps FramePort's
download and conversion engine (yt-dlp + FFmpeg, GPU encoders, YouTube PO Token support) with a new interface.

## Run from source

```bash
npm install
npm start
```

## Build

```bash
npm run dist
npm run dist:mac
```

Auto-update is off. To turn it on, set `RELEASES_REPO` in `app-updater.js` and add a matching `build.publish`
entry in `package.json`.

## Tests

```bash
npm run test:language
npm run test:updater
npm run test:download-path
npm run test:checksum
npm run test:clip
npm run test:startup
```

## License

MIT, see [LICENSE](LICENSE). Bundled third-party components keep their own licenses, see
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
