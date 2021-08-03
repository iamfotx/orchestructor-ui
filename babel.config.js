module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/env',
    [
      '@babel/typescript',
      {
        onlyRemoveTypeImports: true,
        allExtensions: true,
        isTSX: true,
      },
    ],
    [
      '@babel/react',
      {
        runtime: 'automatic',
      },
    ],
  ];

  return {
    presets,
  };
};
