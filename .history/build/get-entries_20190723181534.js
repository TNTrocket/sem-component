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
          file: config.dev ? `public/js/${folderNameUpper}/GzLpC${folderNameUpper}.min.js` : `lib/GzLpC${folderNameUpper}.min.js`,
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
        ].filter(p => p)
      })
      //html:font-size 100px
      // entries.push({
      //   input: `src/components/${folderName}/index.js`,
      //   output: {
      //     file: config.dev ? `public/js/GzLpC${folderNameUpper}.min.js` : `lib/GzLpC${folderNameUpper}.min.js`,
      //     format: 'umd',
      //     sourcemap: false,
      //     name: `GzLpC${folderNameUpper}`
      //   },
      //   external: ['$'],
      //   plugins: [
      //     getPlugin('json'),
      //     getPlugin('postcss', {
      //       remUnit: 100
      //     }),
      //     getPlugin('resolve'),
      //     getPlugin('commonjs'),
      //     getPlugin('ejs'),
      //     getPlugin('babel'),
      //     getPlugin('uglify'),
      //     !config.dev && getPlugin('filesize')
      //   ].filter(p => p)
      // })
      // // html font-size 37.5px
      // entries.push({
      //   input: `src/components/${folderName}/index.js`,
      //   output: {
      //     file: config.dev ? `public/js/GzLpC${folderNameUpper}.min.js` : `lib/GzLpC${folderNameUpper}.min.js`,
      //     format: 'umd',
      //     sourcemap: false,
      //     name: `GzLpC${folderNameUpper}`
      //   },
      //   external: ['$'],
      //   plugins: [
      //     getPlugin('json'),
      //     getPlugin('postcss', {
      //       remUnit: 37.5
      //     }),
      //     getPlugin('resolve'),
      //     getPlugin('commonjs'),
      //     getPlugin('ejs'),
      //     getPlugin('babel'),
      //     getPlugin('uglify'),
      //     !config.dev && getPlugin('filesize')
      //   ].filter(p => p)
      // })
    })
  }
  return entries
}