'use strict'
const path = require('path')
const fs = require('fs')
const {paths} = require('../config')

function PreBuildTasksPlugin(fns) {
  this.name = 'Pre Build Tasks Plugin'
  this.setup = (build) => {
    build.onStart((result) => {
      fns.map((fn) => fn())
    })
  }
}

function HtmlEsBuildPlugin() {
  this.name = 'HTML esbuild Plugin'
  this.setup = (build) => {
    build.onEnd(({metafile: {outputs = []} = {}}) => {
      console.log(out)
      const key = Object.keys(outputs)[0].split('/')[1]
      const template = `<!doctype html><html><head><meta charset="utf-8"><title>EsBuild App</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><script src="${key}"></script></body></html>`
      fs.writeFileSync(path.join(paths.buildPath, 'index.html'), template)
    })
  }
}

module.exports = {
  PreBuildTasksPlugin,
  HtmlEsBuildPlugin
}
