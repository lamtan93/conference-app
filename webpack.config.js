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
	  rules: [{
	    test: /\.html$/,
	    use: [ {
	      loader: 'html-loader',
	    }]
	  }]
	}
};