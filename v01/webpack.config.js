var autoprefixer = require('autoprefixer-core');

module.exports = {
    entry: {
		app: ["./entry.jsx"]
	},
    output: {
        path: "./build",
		publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
			{ test: /\.jade$/, loader: "jade" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{ test: /\.jsx$/, loader: "jsx" },
			{ test: /\.less$/, loader: "style!css!postcss!less" }
        ]
    },
	postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
};