const path = require('path');
const fs = require('fs');
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),

  output: {
    path: path.resolve(__dirname, "public/js"), // string
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        loader: "babel-loader",

        options: {
          presets: ['env', 'react', 'stage-0']
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
           use: 'css-loader',
           fallback: 'style-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      },
      {
        test: /\.(otf)$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]',
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]',
        }
      },
      {
        test: /\.(pdf)$/,
        loader: 'file-loader',
        options: {
          name: '../docs/[name].[ext]',
        }
      },
      {
        test: /\.(md)$/,
        loader: 'file-loader',
        options: {
          name: '../archive/[name].[ext]',
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ],

  },

  devtool: "cheap-eval-source-map",

  target: "web",

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
        // NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('../css/bundle.css')
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}
