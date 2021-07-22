'use strict'
const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')
const { createServer, request } = require('http')
const { spawn } = require('child_process')
const {paths} = require('./config')
const {PreBuildTasksPlugin, HtmlEsBuildPlugin} = require('./plugins')
const {
  modeConfig,
  loadDefine,
  loadPlugins,
  mergeBuildOptions,
  syncBuild,
} = require('./utils')

const mode = process.env.NODE_ENV
const isProduction = mode == 'production'
const clients = []

const buildOptions = mergeBuildOptions(
  {
    entryPoints: [path.join(paths.srcPath, 'index.jsx')],
    entryNames: '[dir]/[name]-[hash]',
    outdir: 'build',
    outbase: 'src',
    bundle: true,
    color: true,
    logLevel: 'warning',
    mainFields: ['browser'],
    target: ['chrome58', 'firefox57', 'edge16'],
    // inject: [path.join(__dirname, './injections/shims.js')],
    // loader: { '.js': 'jsx' },
    define: loadDefine(mode),
    // plugins: [new PreBuildTasksPlugin([syncBuild]), new HtmlEsBuildPlugin()],
    plugins: [new PreBuildTasksPlugin([syncBuild])],
  },
  modeConfig(mode),
)

esbuild
  .build(buildOptions)
  .then((result) => console.log('Build complete', result))
  .catch((err) => process.exit(1))

  // esbuild.serve({ servedir: paths.buildPath}, buildOptions)







  // let mime = {
  //   '.html': 'text/html',
  //   '.css': 'text/css',
  // };
  // let server = createServer((req, res) => {
  //   let filename = req.url && req.url !== '/' ? req.url : 'index.html';
  //   let filepath = path.join(paths.buildPath, filename);
  //   console.log('filepath', filepath);
  //   if (fs.existsSync(filepath)) {
  //     let stream = fs.createReadStream(filepath);
  //     stream.on('ready', () => {
  //       let type = mime[path.parse(filepath).ext] || 'application/octet-stream';
  //       console.log(`${req.method} ${req.url} => 200 ${type}`);
  //       res.writeHead(200, { 'content-type': type });
  //       stream.pipe(res);
  //     });
  //     stream.on('error', err => {
  //       console.log(`${req.method} ${req.url} => 500 ${filepath} ${err.name}`);
  //       res.writeHead(500, err.name);
  //       res.end(JSON.stringify(err));
  //     });
  //   } 
    // else {
    //   let reqProxy = request({ path: req.url, port: 8000 });
    //   reqProxy.on('response', resProxy => {
    //     let type = resProxy.headers['content-type'];
    //     console.log(`${req.method} ${req.url} => ${resProxy.statusCode} ${type} via esbuild`);
    //     res.writeHead(resProxy.statusCode, { 'content-type': type });
    //     resProxy.pipe(res);
    //   });
    //   req.pipe(reqProxy);
    // }
  // });
  // server.listen(4000, err => {
  //   if (err) throw err;
  //   console.log('Served on http://localhost:4000');
  // });

// esbuild.serve({ servedir: paths.buildPath }, {}).then(() => {
//     createServer((req, res) => {
//       const { url, method, headers } = req
//       if (req.url === '/')
//         return clients.push(
//           res.writeHead(200, {
//             'Content-Type': 'text/event-stream',
//             'Cache-Control': 'no-cache',
//             Connection: 'keep-alive',
//           })
//         )
//       const _path = ~url.split('/').pop().indexOf('.') ? url : `/index.html` //for PWA with router
//       req.pipe(
//         request({ hostname: '0.0.0.0', port: 8000, path: _path, method, headers }, (prxRes) => {
//           res.writeHead(prxRes.statusCode, prxRes.headers)
//           prxRes.pipe(res, { end: true })
//         }),
//         { end: true }
//       )
//     }).listen(8080)
  
//     setTimeout(() => {
//       const op = { darwin: ['open'], linux: ['xdg-open'], win32: ['cmd', '/c', 'start'] }
//       const ptf = process.platform
//       if (clients.length === 0) spawn(op[ptf][0], [...[op[ptf].slice(1)], `http://localhost:8080`])
//     }, 1000) //open the default browser only if it is not opened yet
//   })