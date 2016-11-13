var webpack = require('webpack');
var path = require('path');

var GLOBALS = {
  config: {
    apiUrl: JSON.stringify('./mock-api.json')
  }
};

var config = {
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(css|less)$/, loader: "style!css?modules&importLoaders=1&localIdentName=project_[local]!less" }
    ]
  },
};

module.exports = config;
