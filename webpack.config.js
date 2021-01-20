const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};
const apiAddress = 'http://localhost:8083';
const devMode = process.env.NODE_ENV !== 'production';

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

const devtool = devMode ? 'cheap-module-eval-source-map' : 'inline-source-map';

const mode = devMode ? 'development' : 'production';

const rules = [
  {
    test: /.(jsx?)$/,
    include: paths.source,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }
];

const optimization = {
  minimize: true,
  minimizer: [
    new OptimizeCSSAssetsPlugin(),
    new TerserPlugin({ extractComments: false, parallel: true })
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
  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    title: 'React/Redux Chatroom'
  }),
  new DefinePlugin({
    API_ADDRESS: JSON.stringify(apiAddress)
  }),
  new ESLintPlugin()
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
