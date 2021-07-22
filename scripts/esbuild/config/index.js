const path = require('path')
const rootPath = path.resolve(__dirname, '../../../')

const paths = {
  rootPath,
  srcPath: path.resolve(rootPath, 'src'),
  pkgPath: path.resolve(rootPath, 'package.json'),
  buildPath: path.resolve(rootPath, 'build'),
}

module.exports = { paths }