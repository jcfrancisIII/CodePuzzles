var path = require('path');

module.exports = {
  entry: './components/App.js',
  output: {
  	path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public/'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, 
        loader: "style!css!less"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};