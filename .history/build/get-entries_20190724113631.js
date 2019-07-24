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
      entries.push({
          input: 'src/sdk/run.ts',
          output: {
            file: config.dev ? `public/js/${folderNameUpper}/run.js` : `lib/${folderNameUpper}/run.js`,
            format: 'iife',
            sourcemap: false,
            name: 'run'
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
            getPlugin('replace', {
              filename: `${folderNameUpper}`
            }),
            getPlugin('uglify'),
            !config.dev && getPlugin('filesize')
          ].filter(p => p)
        }, ),
        entries.push({
          input: `src/components/${folderName}/index.ts`,
          output: {
            file: config.dev ? `public/js/${folderNameUpper}/${folderNameUpper}.min.js` : `lib/${folderNameUpper}/${folderNameUpper}.min.js`,
            format: 'umd',
            sourcemap: false,
            name: `${folderNameUpper}`
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
            getPlugin('replace', {
              filename: `${folderNameUpper}`
            }),
            // getPlugin('uglify'),
            !config.dev && getPlugin('filesize'),
            getPlugin('html', {
              filename: `${folderNameUpper}`
            })
          ].filter(p => p)
        })
    })
  }
  return entries
}