var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  entry: './components/App.js',
  output: {
  	path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css!postcss" },
      { test: /\.less$/, loader: "style!css!less" },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};