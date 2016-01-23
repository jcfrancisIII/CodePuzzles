module.exports = {
	context: __dirname,
	entry: __dirname + "/js/app.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
	loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }
	]
};