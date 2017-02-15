var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  
  entry: "./index.js",

  output: {
    path: __dirname + "/dist",
    filename: "bundle.min.js"
  },
  
  context: __dirname + "/src",
  
  resolve: {
    mainFiles: ["index"]
  },
  
  devtool: debug ? "inline-sourcemap" : null,
  
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};