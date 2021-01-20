const ERROR = 2;
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
  root: true,
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
    'simple-import-sort/imports': ERROR,
    'space-before-function-paren': ['error', 'always'],
    'keyword-spacing': ERROR,
    'no-trailing-spaces': ERROR,
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'linebreak-style': [ERROR, 'unix'],
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    'react/jsx-indent-props': [ERROR, 'first'],
    'object-curly-spacing': [ERROR, 'always'],
    'no-console': OFF,
    'sort-imports': OFF,
    'import/order': OFF,
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '17.0.1'
    },
    propWrapperFunctions: ['forbidExtraProps']
  }
};
