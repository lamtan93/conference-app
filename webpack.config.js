const path = require('path');
/*var UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var jquery = require('jquery');
//console.log( path.resolve(__dirname, "build"));

module.exports = {

	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},

	

	plugins: [
	/*new UglifyJSPlugin(),*/
	new HtmlWebpackPlugin(),
	//new jquery();
	],

	module: {
		rules: [
			{ 
				test: /\.html$/, 
				use: "html-loader" 
			},
			{ 
				test: /\.css$/, 
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	}
	
};


