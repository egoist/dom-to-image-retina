import {
  toPng as _toPng,
  toJpeg as _toJpeg,
  toBlob as _toBlob,
} from "dom-to-image-chrome-fix-retina"
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
  return _toPng(el, options).then((dataUrl: string) =>
    changeDpiDataUrl(dataUrl, DPI)
  )
}

export const toJpeg = (el: Node, options?: Options): Promise<string> => {
  return _toJpeg(el, options).then((dataUrl: string) =>
    changeDpiDataUrl(dataUrl, DPI)
  )
}

export const toBlob = (el: Node, options?: Options): Promise<Blob> => {
  return _toBlob(el, options).then((blob: Blob) => changeDpiBlob(blob, DPI))
}
