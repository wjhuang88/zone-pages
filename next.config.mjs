import path from 'node:path'

export default {
  sassOptions: {
    includePaths: [path.join(import.meta.dirname, 'src/styles')],
  },
}