const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Shared Rules
    strict: ERROR,
    'consistent-return': OFF,
    eqeqeq: [ERROR, 'allow-null'],
    indent: OFF,
    'brace-style': [ERROR, '1tbs'],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, { after: true, before: true }],
    'eol-last': ERROR,
    'no-multi-spaces': ERROR,
    'no-bitwise': OFF,
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'max-len': OFF,
    'no-use-before-define': OFF,
    'no-useless-concat': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'valid-typeof': [ERROR, { requireStringLiterals: true }],

    // React Rules
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    //   'react-hooks/rules-of-hooks': ERROR,
    //   'react-hooks/exhaustive-deps': WARN,

    // TypeScript Rules
    '@typescript-eslint/no-var-requires': OFF,
  },
};
