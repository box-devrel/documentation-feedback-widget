
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'documentation-feedback.min.js'
  },
  plugins: [
    new CompressionPlugin({ test: /\.js/ }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })
  ]
});