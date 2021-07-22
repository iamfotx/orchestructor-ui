'use strict'
const esbuild = require('esbuild')
const path = require('path')
const { paths } = require('./config')
const { modeConfig, loadDefine, loadPlugins } = require('./utils')

const mode = process.env.NODE_ENV
const isProduction = mode == 'production'

const buildOptions = {
  entryPoints: [path.join(paths.srcPath, 'index')],
  entryNames: '[dir]/[name]-[hash]',
  outdir: 'build',
  outbase: 'src',
  bundle: true,
  define: loadDefine(mode),
  // ...modeConfig(mode)
}

esbuild
  .build(buildOptions)
  .catch(() => process.exit(1))
