var path = require('path');

var rootDir = path.resolve(__dirname, "../");
var srcDir = rootDir + "/src";

var nodeModulesDir = path.resolve(rootDir, "node_modules");

module.exports = {
  entry: {
    app: './src/conway.jsx'
  },
  output: {
    path: path.resolve(__dirname, "dist/bundle.js"),
    filename: "bundle.js"
  },

  resolve: {
    root: [srcDir, nodeModulesDir],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,

        loader: 'babel',

        exclude: /node_modules/,

        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};