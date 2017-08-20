const path = require('path');
/*var UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var jquery = require('jquery');
//console.log( path.resolve(__dirname, "build"));

module.exports = {
// définition des points d'entrée
// il est possible de définir plusieurs points d'entrée
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
	/*new UglifyJSPlugin(),*/
	new HtmlWebpackPlugin(),
	//new jquery();
	]
};