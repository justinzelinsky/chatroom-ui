const ERROR = 2;
const OFF = 0;

module.exports = {
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
  globals: {
    API_ADDRESS: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    'better-styled-components',
    'jest',
    'react',
    'simple-import-sort'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': ERROR,
    'indent': [ERROR, 2, { SwitchCase: 1 }],
    'keyword-spacing': 1,
    'linebreak-style': [ERROR, 'unix'],
    'no-console': ERROR,
    'no-trailing-spaces': ERROR,
    'object-curly-spacing': [ERROR, 'always'],
    'quotes': [ERROR, 'single'],
    'react/react-in-jsx-scope': OFF,
    'react/jsx-indent-props': [ERROR, 'first'],
    'semi': [ERROR, 'always'],
    'simple-import-sort/imports': ERROR,
    'space-before-function-paren': ['error', 'always'],
  },
  settings: {
    propWrapperFunctions: ['forbidExtraProps'],
    react: {
      'version': 'detect'
    }
  }
};
