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

Installed copies update themselves from [GitHub Releases](https://github.com/Sorryhxm/StarPort/releases).
To publish a release, bump `version` in `package.json`, run `npm run dist`, and upload
`dist/StarPort-Setup.exe`, `dist/StarPort-Setup.exe.blockmap`, `dist/latest.yml` and `dist/StarPort.exe` to a new
release tagged `v<version>`.

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
