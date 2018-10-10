const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    progress: true,
    disableHostCheck: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'documentation-feedback.js'
  }
});