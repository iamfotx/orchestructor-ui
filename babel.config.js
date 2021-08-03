module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
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
    ],
  };
};
