const {syncBuild} = require('../utils')

const buildStartPlugin = {
  name: 'Build Start Plugin',
  setup: (build) => {
    build.onStart(result => {
			syncBuild();
      console.log(`build startd`)
    })
  },
}