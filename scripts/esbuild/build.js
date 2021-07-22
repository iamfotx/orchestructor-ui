'use strict'
const esbuild = require('esbuild')
const path = require('path')
const dotenv = require('dotenv')
const rimraf = require('rimraf')

const NODE_ENV = process.env.NODE_ENV
const isProduction = NODE_ENV === 'production'
const srcPath = path.resolve(__dirname, '../../src')
const pkgPath = path.resolve(__dirname, '../../package.json')
const buildPath = path.resolve(__dirname, '../../build')
const {parsed: envs} = dotenv.config({
  path: path.resolve(__dirname, `../../.env.${NODE_ENV}`),
})
const define = {}

;(function loadEnvs() {
  for (const env in envs) {
    define[`process.env.${env}`] = JSON.stringify(process.env[env])
  }
})()

const buildOptions = {
  entryPoints: [path.join(srcPath, 'index')],
  entryNames: '[dir]/[name]-[hash]',
  bundle: true,
  outdir: 'build',
  outbase: 'src',
  external: Object.keys(require(pkgPath).dependencies),
  define,
}

rimraf.sync(buildPath)
esbuild
  .build(buildOptions)
  .then(() => console.log('Build finished.'))
  .catch(() => {
    console.log('Build finished with errors.')
    return process.exit(1)
  })
