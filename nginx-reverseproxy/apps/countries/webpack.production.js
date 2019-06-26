const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'redux-thunk': 'ReduxThunk'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  optimization: {
    // minimizer: [
    //   new TerserJSPlugin({}),
    //   new OptimizeCSSAssetsPlugin({})
    // ],
    minimize: false,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ]
});