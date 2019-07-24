import config from './config';
import getPostcss from './get-postcss';

import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import less from 'rollup-plugin-less';
import ejs from 'rollup-plugin-ejs'
import typescript from 'rollup-plugin-typescript';
import html from 'rollup-plugin-generate-html-template';

const plugins = {
  typescript(opt) {
    return typescript({
      module: 'ESNext',
      target: "es5",
      allowJs: true,
      moduleResolution: "node",
      esModuleInterop: true,
      lib: ["es2015", "es2015.promise", "dom"],
    })
  },
  html(opt) {
    return html({
      template: 'src/views/template.html',
      filename: `${opt.filename}.html`
    })
  },
  progress(opt) {
    return progress({
      clearLine: opt.clear || false
    });
  },
  replace() {
    return replace({
      exclude: 'node_modules/**',
      NODE_ENV: JSON.stringify(config.dev ? 'development' : 'production')
    });
  },
  alias() {
    return alias(config.alias);
  },
  json() {
    return json();
  },
  resolve() {
    return resolve({
      jsnext: true,
      main: true
    });
  },
  commonjs() {
    return commonjs({
      extensions: ['.js', '.ts']
    });
  },
  eslint() {
    if (!config.eslint) return;

    return eslint({
      include: ['src/**/*.js', 'es/**/*.js']
    });
  },
  babel() {
    return babel({
      include: ['src/**', 'es/**', 'node_modules/**/es/**']
    });
  },
  uglify(opt) {
    return uglify(opt);
  },
  filesize() {
    return filesize();
  },
  postcss(opt) {
    if (!config.extract && !opt.force) return;

    return postcss(getPostcss(opt));
  },
  serve() {
    return serve({
      contentBase: config.serve.base,
      port: config.serve.port,
      host: '127.0.0.1',
      historyApiFallback: true
    });
  },
  livereload() {
    if (!config.live) return;

    return livereload(
      config.serve.base
    );
  },
  less() {
    return less({
      insert: true
    })
  },
  ejs() {
    return ejs()
  }
};

export default function getPlugin(name, opt = {}) {
  return plugins[name](opt);
}