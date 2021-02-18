# dom-to-image-retina

[![npm version](https://badgen.net/npm/v/dom-to-image-retina)](https://npm.im/dom-to-image-retina)

This combines [dom-to-image-chrome-fix-retina](https://npm.im/dom-to-image-chrome-fix-retina) and [changedpi](https://www.npmjs.com/package/changedpi).

## Usage

```ts
import { toPng, toJpeg, toBlob } from "dom-to-image-retina"

const dataUrl = await toPng(el, options)
const dataUrl = await toJpeg(el, options)
const blob = await toBlob(el, options)
```

## License

MIT.
