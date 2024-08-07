import Blowfish from 'blowfish-node'
import { Base64 } from 'js-base64';

const githubPath = 'https://raw.githubusercontent.com/wjhuang88/zone-articles/master'
const giteePath = 'https://gitee.com/wjhuang88/zone-articles/raw/master'

export const USER_HOME = process.env.HOME || process.env.USERPROFILE
export const CONTENT_BASE = process.env.NODE_ENV == 'development' ? giteePath : githubPath

export const DEFAULT_TITLE = "Gerald's Blog"

export const LOADING_ICON_BASE64 = "data:image/png;base64,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"

const BLOWFISH = new Blowfish('*oJL9U()PeOh,MZy', Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
BLOWFISH.setIv('BeH.8@.u');

export function proxyEncode(src) {
  return Base64.fromUint8Array(BLOWFISH.encode(src), true)
}

export function proxyDecode(src) {
  const br = Base64.toUint8Array(src)
  return BLOWFISH.decode(br, Blowfish.TYPE.STRING)
}