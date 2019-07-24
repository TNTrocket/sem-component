import config from './config';
import getPlugin from './get-plugin';
import getEntries from './get-entries'
let entries = getEntries()
export default [
  {
    input: 'src/sdk/index.ts',
    output: {
      file: config.dev ? 'public/js/gz-landingpage-sdk.js':'lib/gz-landingpage-sdk.js',
      format: 'iife',
      sourcemap: false,
      name: 'tnt'
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
      config.dev && getPlugin('serve'),
      config.dev && getPlugin('livereload'),
      // getPlugin('uglify'),
      // !config.dev && getPlugin('filesize'),
      // getPlugin('html',{filename: 'index'})
    ].filter(p => p)
  },
  ...entries
];
