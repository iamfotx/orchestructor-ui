

module.exports = () => ({
	write: false,
  plugins: [],
	watch: {
    onRebuild: (error, result) => {
      if (error) console.error('watch build failed.', error)
      else console.log('watch build succeeded.')
    },
  },
})