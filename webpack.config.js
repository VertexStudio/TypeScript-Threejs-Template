const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/app.ts',
	output: {
		path: __dirname + "/dist",
		filename: "[name][chunkhash].js",
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
    devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{ loader: "ts-loader" }
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.mp3$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: './src/index.html'
		})
  ],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
				priority: -10,
				test: /[\\/]node_modules[\\/]/
				}
		},
		chunks: 'async',
		minChunks: 1,
		minSize: 30000,
		name: "vertex"
		}
  	},
}
