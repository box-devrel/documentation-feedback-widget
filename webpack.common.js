const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  // input
  entry: path.resolve(__dirname, "src", "index.js"),

  // output
  output: {
    library: "feedback",
    libraryTarget: "umd",
    libraryExport: "default"
  },

  // transformations
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        enforce: "pre",
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: "sasslint",
        options: {
          failOnWarning: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /styles\/.*\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
            options: { singleton: true, sourceMap: false }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: false,
              autoprefixer: autoprefixer
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false }
          }
        ]
      },
      {
        test: /preact-material-components\/.*\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
            options: { singleton: true, sourceMap: false }
          },
          {
            loader: "css-loader",
            options: { modules: false, importLoaders: 1, sourceMap: false }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false }
          }
        ]
      }
    ]
  },

  // Plugins
  plugins: [new StyleLintPlugin()]
};