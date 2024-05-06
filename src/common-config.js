const githubPath = 'https://raw.githubusercontent.com/wjhuang88/zone-articles/master'
const giteePath = 'https://gitee.com/wjhuang88/zone-articles/raw/master'

export const USER_HOME = process.env.HOME || process.env.USERPROFILE
export const CONTENT_BASE = process.env.NODE_ENV == 'development' ? giteePath : githubPath