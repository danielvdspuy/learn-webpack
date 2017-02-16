var path = require('path');

var LiveReloadPlugin = require('webpack-livereload-plugin');

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
    mainFiles: ["index"]
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

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
