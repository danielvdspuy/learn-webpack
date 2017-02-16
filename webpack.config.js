var path = require('path');

// var LiveReloadPlugin = require('webpack-livereload-plugin');
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
  entry: {
    homepage: "./index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  context: __dirname + "/src",

  resolve: {
    mainFiles: ["index"],
    extensions: [".js", ".json", ".scss"]
  },

  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  devtool: "inline-sourcemap",

  plugins: [
    // new LiveReloadPlugin(),
    new WatchLiveReloadPlugin({
      files: [
        './**/*.html',
        './**/*.scss',
        './**/*.js'
      ]
    })
  ]
};
