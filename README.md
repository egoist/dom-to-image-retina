# dom-to-image-retina

This combines [dom-to-image-chrome-fix-retina](https://npm.im/dom-to-image-chrome-fix-retina) and [changedpi](https://www.npmjs.com/package/changedpi).

## Usage

```ts
import { toPng, toJpeg, toBlob } from "dom-to-image-retina"

const dataUrl = toPng(el, options)
const dataUrl = toJpeg(el, options)
const blob = toBlob(el, options)
```

## License

MIT.
