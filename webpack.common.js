const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // input
  entry: path.resolve(__dirname, 'src', 'index.js'),

  // output
  output: {
    library: 'feedback',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  // transformations
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        enforce: "pre",
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint',
        options: {
          failOnWarning: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true, sourceMap: false }
          },
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1, sourceMap: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              ctx: { autoprefixer: { browsers: 'last 2 versions' } }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: false }
          }
        ]
      },
    ]
  },

  // Plugins
  plugins: [
    new StyleLintPlugin(),
  ],

  // Make compatible with React modules
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  }
};