var webpack = require('webpack');
var BrowserSync = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var modRewrite = require('connect-modrewrite');
var path = require('path');

module.exports = {
	entry: './src/app.component.ts',
	output: {
		path: 'public',
		publicPath: '',
		filename: '[name].bundle.js'
	},
	cache: true,
	debug: true,
	stats: {
		colors: true,
		reasons: true,
		hash: true,
		version: true,
		timings: true,
		chunks: true,
		chunkModules: true,
		cached: true,
		cachedAssets: true
	},
	resolve: {
		extensions: ['','.js','.ts']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.ProvidePlugin({
			Zone: "zone.js"
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new BrowserSync({
			host: 'localhost',
			port: 3030,
			server: { baseDir: ['public', './'] },
			middleware: [
				modRewrite(['^[^\\.]*$ /index.html [L]'])
			]
		})
	],
	module: {
		loaders: [
			{
				test: /\.ts/,
				loaders: ['ts'],
				exclude: /node_modules/
			}, {
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000'
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}, {
				test: /\.css$/,
				// Reference: https://github.com/webpack/extract-text-webpack-plugin
				// Extract css files in production builds
				//
				// Reference: https://github.com/webpack/style-loader
				// Use style-loader in development for hot-loading
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
			}, {
				test: /\.scss$/,
				loaders: ['style', 'css', `sass?sourceMap&sourceMapContents&includePaths[]=${path.join(__dirname, "node_modules")}`]
			}
		]
	}
};