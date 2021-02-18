import domToImage from "dom-to-image-chrome-fix-retina"
import { changeDpiDataUrl, changeDpiBlob } from "changedpi"

export interface Options {
  filter?: (node: Node) => boolean
  bgcolor?: string
  width?: number
  height?: number
  style?: {}
  quality?: number
  imagePlaceholder?: string
  cacheBust?: boolean
}

const DPI = 72 * 2

export const toPng = (el: Node, options?: Options): Promise<string> => {
  return domToImage(el, options)
    .toPng()
    .then((dataUrl: string) => changeDpiDataUrl(dataUrl, DPI))
}

export const toJpeg = (el: Node, options?: Options): Promise<string> => {
  return domToImage(el, options)
    .toJpeg()
    .then((dataUrl: string) => changeDpiDataUrl(dataUrl, DPI))
}

export const toBlob = (el: Node, options?: Options): Promise<Blob> => {
  return domToImage(el, options)
    .toBlob()
    .then((blob: Blob) => changeDpiBlob(blob, DPI))
}
