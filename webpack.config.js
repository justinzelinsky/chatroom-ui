const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin, ProvidePlugin } = require('webpack');
const { ESBuildMinifyPlugin, ESBuildPlugin } = require('esbuild-loader');

const paths = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const apiAddress = 'http://localhost:8083';
const isDevMode = process.env.NODE_ENV !== 'production';

const entry = path.join(paths.source, 'index.jsx');

const devServer = {
  contentBase: paths.dist,
  compress: true,
  historyApiFallback: true,
  hot: true,
  https: true,
  open: 'Google Chrome',
  port: 9000,
  proxy: {
    '/api': apiAddress
  }
};

const devtool = isDevMode ? 'cheap-module-eval-source-map' : 'inline-source-map';

const mode = isDevMode ? 'development' : 'production';

const rules = [
  {
    test: /.(jsx?)$/,
    include: [paths.source],
    exclude: /node_modules/,
    loader: 'esbuild-loader',
    options: {
      loader: 'jsx'
    }
  }
];

const optimization = {
  minimize: true,
  minimizer: [
    new ESBuildMinifyPlugin({
      target: 'es2015'
    })
  ],
  splitChunks: {
    chunks: 'all'
  }
};

const output = {
  filename: 'app.js',
  path: paths.dist
};

const plugins = [
  new CleanWebpackPlugin(),
  new DefinePlugin({
    API_ADDRESS: JSON.stringify(apiAddress)
  }),
  new ESBuildPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    title: 'React/Redux Chatroom'
  }),
  new ProvidePlugin({
    React: 'react'
  })
];

if (process.env.WEBPACK_ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.WEBPACK_TRACKER) {
  plugins.push(
    new PacktrackerPlugin({
      branch: 'master',
      fail_build: true,
      project_token: process.env.PACKTRACKER_TOKEN,
      upload: true
    })
  );
}

const resolve = {
  extensions: ['.jsx', '.js'],
  modules: ['node_modules', paths.source],
  symlinks: false
};

module.exports = {
  entry,
  devServer,
  devtool,
  mode,
  module: {
    rules
  },
  output,
  optimization,
  plugins,
  resolve
};
