const webpack=require('webpack');
const path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(parentDir, 'index.js')
	],
	module:{
		rules: [{						//loaders in webpack 3
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /\.scss$/,
			loaders: ["style-loader", "css-loader", "less-loader", "sass-loader"]
		}
		]
	},
	output:{
		path: path.join(parentDir , 'dist'),
		filename: 'bundle.js'
	},
	devServer:{
		contentBase: path.join(parentDir, 'dist'),
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 9014
	},
	devtool: 'source-map'
}


