var webpack = require('webpack');
var path = require('path');

var applicationName = "<%= projectName %>";

var GLOBALS = {
  config: {
    apiUrl: JSON.stringify('./mock-api.json')
  },
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
};

var config = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: applicationName + '.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(css|less)$/, loader: "style!css?modules&importLoaders=1&sourceMap&localIdentName=" + applicationName + "_[local]!less?sourceMap" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
};

module.exports = config;
