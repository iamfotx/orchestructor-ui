'use strict';

const esbuild = require('esbuild');
const path = require('path');

const srcPath = path.resolve(__dirname, '../../src')

const buildOptions = {
  entryPoints: [path.join(srcPath, 'index')],
	entryNames: '[dir]/[name]-[hash]',
  bundle: true,
	outdir: 'build',
	outbase: 'src'
}

esbuild.build(buildOptions).catch(() => {
	return process.exit(1)
})