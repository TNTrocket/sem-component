import path from 'path';
import config from './config';

export default function getPostcss ({
  remUnit
}) {
  return {
    sourceMap: false,
    extensions: ['.less'],
    minimize:true,
    plugins: [
      require('postcss-import')({
        path: [
          path.resolve('node_modules')
        ]
      }),
      require('postcss-mixins')(),
      require('postcss-advanced-variables')(),
      require('postcss-color-function')(),
      require('postcss-nested')(),
      require('postcss-extend')(),
      require('postcss-calc')({
        mediaQueries: true,
        selectors: false
      }),
      require('postcss-px2rem')({
        remUnit: remUnit || 100,
        remPrecision: 5,
        keepComment: 'no2rem',
        remVersion:false
      }),
      require('autoprefixer')({
        browsers: [
          'ie >= 9',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 4.4',
          'bb >= 10'
        ]
      }),
      require('postcss-csso')()
    ].filter(p => p)
  };
}
