import fs from 'fs'
import path from 'path'
import getPlugin from './get-plugin';
import config from './config';
let customFolders = []
export default function () {
  let entries = []
  let folders = []
  if (customFolders && customFolders.length) {
    folders = customFolders;
  } else {
    folders = fs.readdirSync(path.join(__dirname, '../src/components/'))
  }
  if (folders.length) {
    folders.forEach((folderName) => {
      let folderNameUpper = folderName.toUpperCase().replace(/-/g, '')
      // 通过scale使用
      entries.push({
        input: `src/components/${folderName}/index.ts`,
        output: {
          file: config.dev ? `public/js/${folderNameUpper}/GzLpC${folderNameUpper}.min.js` : `lib/${folderNameUpper}/GzLpC${folderNameUpper}.min.js`,
          format: 'umd',
          sourcemap: false,
          name: `GzLpC${folderNameUpper}`
        },
        external: ['$'],
        plugins: [
          getPlugin('json'),
          getPlugin('less'),
          getPlugin('resolve'),
          getPlugin('typescript'),
          getPlugin('commonjs'),
          getPlugin('ejs'),
          getPlugin('babel'),
          getPlugin('uglify'),
          !config.dev && getPlugin('filesize'),
          getPlugin('html',{filename: `${folderNameUpper}`})
        ]
      })
    })
  }
  return entries
}