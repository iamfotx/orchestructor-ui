'use strict';
const dotenv = require('dotenv')
const rimraf = require('rimraf')
const path = require('path')
const {paths} = require('../config')

const modeConfig = (mode) => require(`../modes/esbuild.${mode}`)(mode)

// define esbuild-way of saying envs
const loadDefine = (mode) => {
  const define = {}
  const {parsed: envs} = dotenv.config({
    path: path.resolve(paths.rootPath, `.env.${mode}`),
  })
  for (const env in envs) {
    define[`process.env.${env}`] = JSON.stringify(process.env[env])
  }
  return define
}

/* TODO: refactor it later more intelligently
  it joins plugins and merges rest of the object */
const mergeBuildOptions = (...options) =>
  options.reduce((nextOptions, prevOptions) => {
    const {plugins: prevPlugins = [], ...prevRest} = prevOptions
    const {plugins: nextPlugins = [], ...nextRest} = nextOptions
    return {
      ...nextRest,
      ...prevRest,
      plugins: [...nextPlugins, ...prevPlugins],
    }
  }, {})

const syncBuild = () => {
  rimraf.sync(paths.buildPath)
}

module.exports = {
  modeConfig,
  loadDefine,
  syncBuild,
  mergeBuildOptions
}
