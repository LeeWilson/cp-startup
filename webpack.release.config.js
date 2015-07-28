var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env        = argv.env || 'development';
var onlineData = argv.onlinedata || true;
var debugMode  = argv.debugMode || false;

var plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery', jQuery: 'jquery', 'windows.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env),
      NODE_ENV: JSON.stringify(env),
      ONLINEDATA: onlineData,
      DEBUGMODE: debugMode
    }),
    new webpack.DefinePlugin({
      "process.env": {NODE_ENV: JSON.stringify(env), ONLINEDATA : onlineData }
    }),
    new webpack.optimize.UglifyJsPlugin(
      {sourceMap: false}
    ),
    new HtmlWebpackPlugin({
      template: 'test/html/index.html'
    }),
    new ExtractTextPlugin('framework.css', {
      allChunks: true
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),    // only include wanted locales for moment
    new webpack.NoErrorsPlugin()                                             // don't emit any files if there are errors
];

var loaders = [
    { test: /\.html$/i, loader: 'html' },
    { test: /\.json$/i, loader: 'json' },
    { test: /\.css$/i, loader:ExtractTextPlugin.extract('style-loader', 'css-loader')},
    { test: /\.less$/i, loader:ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
    // { test: /\.less$/i, loader:ExtractTextPlugin.extract('style-loader', 'replace-loader?{ match:"/build/fonts/", replace:"site/build/fonts/" }!css-loader!less-loader')},
    { test: /\.js$/i, exclude: /node_modules/, loader: 'babel-loader'},
    { test: /\.jsx$/i, exclude: /node_modules/, loader: 'babel-loader?stage=1'},
    { test: /\.jpe?g($|\?)|\.gif($|\?)|\.png($|\?)/i, loader: 'file-loader' },
    { test: /\.config$/i, loader: 'file-loader' },
    { test: /jquery\.js$/, loader: 'expose?$' },
    { test: /jquery\.js$/, loader: 'expose?jQuery' }
];

var desktop = {

  name: 'desktop',

  entry: {
    app: [path.join(__dirname, 'app', 'startup.js')]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',  // or 'source-map',

  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },

  module: {
    loaders: loaders
  },

  plugins: plugins
};

module.exports = [ desktop ];
