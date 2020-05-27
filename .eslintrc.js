const ERROR = 2;
const WARN = 1;
const OFF = 0;

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
    ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    API_ADDRESS: true
  },
  plugins: [
    'react',
     'jest',
     'simple-import-sort'
    ],
  rules: {
    'simple-import-sort/sort': ERROR,
    'keyword-spacing': ERROR,
    'no-trailing-spaces': ERROR,
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'linebreak-style': [ERROR, 'unix'],
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    'react/jsx-indent-props': [ERROR, 'first'],
    'object-curly-spacing': [ERROR, 'always'],
    'no-trailing-spaces': [ERROR],
    'no-console': OFF,
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.13.1'
    },
    propWrapperFunctions: ['forbidExtraProps']
  }
};
