const dotenv = require('dotenv')
const rimraf = require('rimraf')
const path = require('path')
const {paths} = require('../config')

const modeConfig = (mode) => require(`../modes/esbuild.${mode}`)(mode)

// define esbuild-way of saying envs
const loadDefine = (mode) => {
	const define = {};
  const {parsed: envs} = dotenv.config({
    path: path.resolve(paths.rootPath, `.env.${mode}`),
  });
  for (const env in envs) {
    define[`process.env.${env}`] = JSON.stringify(process.env[env])
  }
  return define
}

const syncBuild = () => {
  rimraf.sync(paths.buildPath)
}

module.exports = {
  modeConfig,
  loadDefine,
  syncBuild
}
