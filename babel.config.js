module.exports = function (api) {
  api.cache(true)
  const presets = [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
        allExtensions: true,
        isTSX: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        useSpread: true,
      },
    ],
  ]

  return {
    presets,
  }
}
